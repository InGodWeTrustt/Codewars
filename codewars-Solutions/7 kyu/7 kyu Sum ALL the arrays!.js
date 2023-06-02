function arraySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            sum += arraySum(arr[i]);
        } else if (typeof arr[i] === 'number') {
            sum += arr[i];
        }
    }
    return sum;
}

console.log(arraySum([1, 2, [1, 2, 3, [5, 1, 0]]]) === 15); // true