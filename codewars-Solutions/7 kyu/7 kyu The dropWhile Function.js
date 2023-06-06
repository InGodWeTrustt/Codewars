function dropWhile(arr, predicate) {
    let i = 0;
    while (i < arr.length && predicate(arr[i])) {
        i++;
    }
    return arr.slice(i)
}


// Example
function isEven(num) {
  return num % 2 === 0;
}
var seq = [2,4,6,8,1,2,5,4,3,2];

console.log(dropWhile(seq, isEven)) // -> [1,2,5,4,3,2]