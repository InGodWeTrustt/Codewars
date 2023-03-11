function checkDigit(number, index1, index2, digit) {
    const [idx1, idx2] = [index1, index2].sort((a, b) => a - b);
    const subString = String(number).slice(idx1, idx2 + 1);
    return subString.includes('' + digit)
};


// Example
console.log(checkDigit(1234567, 1, 0, 1), true);
console.log(checkDigit(1234567, 0, 1, 2), true);
console.log(checkDigit(67845123654, 4, 2, 4), true);
console.log(checkDigit(6668844536485, 0, 0, 6), true);
console.log(checkDigit(9999999999, 2, 5, 1), false);