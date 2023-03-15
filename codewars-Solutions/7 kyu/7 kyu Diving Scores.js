const sum = arr => arr.reduce((a, b) => a + b, 0);

function scoreOfDive(scores, tariff) {
    scores.sort((a, b) => a - b);
    const remScores = scores.slice(2, -2)
    const result = (sum(remScores) * tariff).toFixed(2);
    return +result;
}

// Example
console.log(scoreOfDive([7, 7.5, 8, 7.5, 6, 7, 7], 3), '64.50');
console.log(scoreOfDive([5, 6.5, 5.5, 5, 6, 4.5, 6], 3.2), '52.80');
console.log(scoreOfDive([7, 7, 7, 7.5, 6.5, 7, 7], 2.6), '54.60');