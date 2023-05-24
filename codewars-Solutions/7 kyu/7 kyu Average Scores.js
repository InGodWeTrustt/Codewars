function average(scores) {
    return Math.round(scores.reduce((a, b) => a + b) / scores.length);
}

const scores = [90,98,89,100,100,86,94];
console.log(average(scores) === 94);