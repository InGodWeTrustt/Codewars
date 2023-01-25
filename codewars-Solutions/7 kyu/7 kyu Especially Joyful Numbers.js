function numberJoy(n) {
    const sum = String(n).split('').reduce((a, b) => a + +b, 0);
    const reverse = String(sum).split('').reverse().join('');
    return sum * reverse === n
}


console.log(numberJoy(1997), false)
console.log(numberJoy(1998), false)
console.log(numberJoy(1729), true)
console.log(numberJoy(18), false)
console.log(numberJoy(1), true)
console.log(numberJoy(81), true)
console.log(numberJoy(1458), true)