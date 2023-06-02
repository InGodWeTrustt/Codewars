function findMissingNumbers(arr) {
    let result = [];
    for (let i = 0; i < arr.length - 1; i++) {
        let diff = arr[i + 1] - arr[i];
        if (diff > 1) {
            for (let j = 1; j < diff; j++) {
                result.push(arr[i] + j);
            }
        }
    }
    return result;
}

console.log(findMissingNumbers([-3,-2,1,4])); // [-1, 0, 2, 3]
console.log(findMissingNumbers([-1,0,1,2,3,4])); // []
console.log(findMissingNumbers([])); // []