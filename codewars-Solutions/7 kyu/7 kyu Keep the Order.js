function keepOrder(arr, val) {
    const newArr = [...arr, val];
    newArr.sort((a, b) => a - b);
    return newArr.indexOf(val)
}

console.log(keepOrder([1, 2, 3, 4, 7], 5), 4);
console.log(keepOrder([1, 2, 3, 4, 7], 0), 0);
console.log(keepOrder([1, 1, 2, 2, 2], 2), 2);
console.log(keepOrder([1, 2, 3, 4], 5), 4);
console.log(keepOrder([1, 2, 3, 4], -1), 0);
console.log(keepOrder([1, 2, 3, 4], 2), 1);
console.log(keepOrder([1, 2, 3, 4], 0), 0);
console.log(keepOrder([1, 2, 3, 4], 1), 0);
console.log(keepOrder([1, 2, 3, 4], 2), 1);
console.log(keepOrder([1, 2, 3, 4], 3), 2);