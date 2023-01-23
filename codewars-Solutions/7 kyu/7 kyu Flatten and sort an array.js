"use strict";

function flattenAndSort(array) {
    const res = [];
    flat(0, array, res);
    res.sort((a, b) => a - b);
    return res;
}

function flat(index, input, out) {
    if (index >= input.length) return;

    if (Array.isArray(input[index])) {
        flat(0, input[index], out)
    } else {
        out.push(input[index])
    }
    flat(index + 1, input, out)
}


console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]), [1, 2, 3, 4, 5, 6, 100]);