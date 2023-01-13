function calculateProbability(n) {
    let prob = 1;
    for (let i = 1; i < n; i++) {
        prob *= (1 - (i / 365))
    }
    return (1 - prob).toFixed(2)
}


console.log(calculateProbability(30)); // 0.71
console.log(calculateProbability(5)); // 0.03
console.log(calculateProbability(1000)); // 1.00