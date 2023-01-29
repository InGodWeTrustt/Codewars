function unusedDigits(...args) {
    // [ 12, 34, 56, 78 ] -> 1|2|3|4|5|6|7|8
    const str = args.map(arg => String(arg).split('').join('|')).join('|');
    const digits = '0123456789';
    return digits.replace(new RegExp(str, 'g'), '');
}

console.log(unusedDigits(12, 34, 56, 78), "09")
console.log(unusedDigits(2015, 8, 26), "3479")