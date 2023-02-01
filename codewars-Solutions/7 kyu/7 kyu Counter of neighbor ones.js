function onesCounter(input) {
    return (input.join('').match(/1+/g) || []).map(num => num.length)
}

console.log(onesCounter([0, 0, 0, 0, 0, 0, 0, 0]), [])
console.log(onesCounter([1, 1, 1, 1, 1]), [5])
console.log(onesCounter([1, 1, 1, 0, 0, 1, 0, 1, 1, 0]), [3, 1, 2])
console.log(onesCounter([0, 0, 0, 1, 0, 0, 1, 1]), [1, 2])
console.log(onesCounter([1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1]), [1, 2, 4, 1])