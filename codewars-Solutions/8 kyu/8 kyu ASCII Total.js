function uniTotal(string) {
    return string.length
        ? string.split('')
            .map(char => char.codePointAt())
            .reduce((a, b) => a + b, 0)
        : 0
}

console.log(uniTotal('')); // 0
console.log(uniTotal('aaa')); // 291
console.log(uniTotal('Mary Had A Little Lamb')); // 1873