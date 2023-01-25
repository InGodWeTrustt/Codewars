function halvingSum(n) {
    const res = [n];

    while (n > 1) {
        const total = Math.floor(n /= 2)
        res.push(total);
    }

    return res.reduce((a, b) => a + b, 0);
}


console.log(halvingSum(25), 47);
console.log(halvingSum(127), 247);