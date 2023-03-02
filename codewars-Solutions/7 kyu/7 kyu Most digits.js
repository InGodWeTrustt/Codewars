function findLongest(array) {
    return +array.map(String).reduce((a, b) => a.length >= b.length ? a : b)
}

console.log(findLongest([1, 10, 100]) === 100)
console.log(findLongest([9000, 8, 800]) === 9000)
console.log(findLongest([8, 900, 500]) === 900)