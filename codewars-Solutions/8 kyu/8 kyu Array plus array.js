function arrayPlusArray(arr1, arr2) {
    return sum([...arr1, ...arr2]);
}


function sum(arr) {
    return arr.reduce((a, b) => a + b, 0)
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);