function doubleCheck(str) {
    return str.replace(/(.)\1/i, '').length !== str.length
}

// Example
console.log(doubleCheck("abca"), false);
console.log(doubleCheck("aabc"), true);
console.log(doubleCheck("a 11 c d"), true);
console.log(doubleCheck("AabBcC"), true);
console.log(doubleCheck("a b  c"), true);
console.log(doubleCheck("a b c d e f g h i h k"), false);