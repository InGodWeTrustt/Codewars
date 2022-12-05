function numberOfPairs(gloves) {
    const map = {}
    gloves.forEach(elem => map[elem] ? map[elem]++ : map[elem] = 1)
    return Object.entries(map).map(([k, v]) => Math.floor(v / 2)).reduce((a, b) => a + b)
}


let tests = [
    [['red', 'red'], 1],
    [['red', 'green', 'blue'], 0],
    [['gray', 'black', 'purple', 'purple', 'gray', 'black'], 3]
];

console.log(numberOfPairs(tests[2][0]), tests[2][1]);
