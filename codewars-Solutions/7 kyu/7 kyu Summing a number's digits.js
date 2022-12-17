function sumDigits(number) {
    return [...String(number).replace(/[-]/, '')].reduce((a, b) => a + +b,0)
}

console.log(sumDigits(10), 1);
console.log(sumDigits(99), 18);
console.log(sumDigits(-32), 5);