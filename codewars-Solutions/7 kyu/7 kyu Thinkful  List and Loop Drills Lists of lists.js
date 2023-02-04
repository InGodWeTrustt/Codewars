function processData(data) {
    return data.map(([a, b]) => a - b).reduce((acc, cur) => acc * cur, 1)
}


console.log(processData([[2, 5], [3, 4], [8, 7]]), 3);
console.log(processData([[2, 9], [2, 4], [7, 5]]), 28);