function multiply(number) {
    const len = number.toString().replace(/-/, '').length;
    return number * (5 ** len)
}

console.log(multiply(10), 250);
console.log(multiply(5), 25);
console.log(multiply(200), 25000);
console.log(multiply(0), 0);
console.log(multiply(-2), -10);