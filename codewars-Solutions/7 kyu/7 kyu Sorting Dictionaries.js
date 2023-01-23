function sortDict(dict) {
    return Object.entries(dict)
        .sort((a, b) => b[1] - a[1])
        .map(([k, v]) => [Number(k) || k, v])
}

console.log(sortDict({ 1: 3, 2: 2, 3: 1 })); //  [[1, 3], [2, 2], [3, 1]]
console.log(sortDict({ 3: 1, 2: 2, 1: 3 })); //  [[1, 3], [2, 2], [3, 1]]