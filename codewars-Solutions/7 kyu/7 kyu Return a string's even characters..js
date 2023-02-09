function evenChars(string) {
    if (string.length < 2 || string.length > 100) return 'invalid string';
    const res = [];
    string.split('').forEach((char, i) => (i + 1) % 2 == 0 ? res.push(char) : '');
    return res;
}


console.log(evenChars("1234"), ["2", "4"])
console.log(evenChars(";;;--"), [";", "-"])
console.log(evenChars("abcdefghijklm"), ["b", "d", "f", "h", "j", "l"])