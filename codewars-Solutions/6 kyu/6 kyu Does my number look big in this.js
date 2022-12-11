//  1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
//  1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938


function narcissistic(value) {
    return value.toString()
        .split('')
        .map((num, _, arr) => Math.pow(num, arr.length))
        .reduce((a, b) => a + Number(b), 0) === value
}


console.log(narcissistic(153)); // true
console.log(narcissistic(1652)); // false