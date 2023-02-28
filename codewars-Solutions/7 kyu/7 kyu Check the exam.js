function checkExam(corAns, studAns) {
    let score = 0;

    studAns.forEach((answer, i) => {
        if (answer === corAns[i]) {
            score += 4;
        } else if (answer === '') {
            // nothing
        } else {
            // answer incorrect
            score -= 1;
        }
    })
    return score < 0 ? 0 : score;
}


console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) === 6);
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]) === 7);
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) === 16);
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]) === 0); 