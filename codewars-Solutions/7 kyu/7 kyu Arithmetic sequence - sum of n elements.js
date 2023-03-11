function ArithmeticSequenceSum(a, r, n) {
    let result = 0;

    for (let i = 1; i <= n; i++) {
        result += (a + (i - 1) * r);
    }

    return result;
}

// Example
console.log(ArithmeticSequenceSum(3, 2, 20), 440);
console.log(ArithmeticSequenceSum(2, 2, 10), 110);
console.log(ArithmeticSequenceSum(1, -2, 10), -80);