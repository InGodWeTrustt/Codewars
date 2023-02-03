function min(arr, toReturn) {
    const val = Math.min(...arr);
    return toReturn === 'value' ? val : arr.indexOf(val)
}


console.log(min([1, 2, 3, 4, 5], 'value'), 1)
console.log(min([1, 2, 3, 4, 5], 'index'), 0)