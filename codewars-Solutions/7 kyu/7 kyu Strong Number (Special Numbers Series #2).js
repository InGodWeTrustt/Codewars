const memo = {};
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else if (memo[n]) {
        return memo[n]
    } else {
        const result = n * factorial(n - 1);
        memo[n] = result;
        return result;
    }
}

function strong(n) {
    return String(n).split('').map(char => factorial(+char)).reduce((a, b) => a + b, 0) === n
        ? "STRONG!!!!"
        : "Not Strong !!";
}


console.log(strong(145), "STRONG!!!!");
console.log(strong(7), "Not Strong !!");