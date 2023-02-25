function multipleOfIndex(array) {
    return array.filter((num, i) => num % i === 0)
}

// Example
console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]), [-6, 32, 25]);
console.log(multipleOfIndex([68, -1, 1, -7, 10, 10]), [-1, 10]);
console.log(multipleOfIndex([11, -11]), [-11]);