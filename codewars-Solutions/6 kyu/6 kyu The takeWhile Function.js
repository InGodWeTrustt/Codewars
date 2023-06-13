/**
 * Returns a new array containing the elements of the original array up to (but not including) 
 * the first element for which the predicate function returns false.
 * @param {Array} arr - The array to process.
 * @param {Function} predicate - The predicate function to apply to each element of the array.
 * @returns {Array} A new array containing the elements of the original array up to (but not including) the first element for which the predicate function returns false.
 */
function takeWhile(arr, predicate) {
  let i = 0;
  while (i < arr.length && predicate(arr[i])) {
    i++;
  }
  return arr.slice(0, i);
}


// Test case 1: Take elements from the beginning of the array until the first even number is encountered
let arr1 = [1, 3, 5, 2, 4, 6];
let predicate1 = (x) => x % 2 !== 0;
console.log(takeWhile(arr1, predicate1)); // Expected output: [1, 3, 5]

// Test case 2: Take elements from the beginning of the array until the first negative number is encountered
let arr2 = [2, 4, -1, 6, -3, 8];
let predicate2 = (x) => x >= 0;
console.log(takeWhile(arr2, predicate2)); // Expected output: [2, 4]

// Test case 3: Take all elements of the array
let arr3 = [1, 2, 3, 4, 5];
let predicate3 = (x) => x < 0;
console.log(takeWhile(arr3, predicate3)); // Expected output: []