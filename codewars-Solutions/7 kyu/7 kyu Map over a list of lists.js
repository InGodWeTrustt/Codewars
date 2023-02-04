function gridMap(fn, a) {
    return a.map(subarr => subarr.map(fn))
}


const numberGrid = [
    [1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [0, 2, 4]
];
console.log(gridMap(x => x ** 2, numberGrid)); // [[1, 4, 9, 16], [25, 36, 49, 64, 81], [0, 4, 16]]