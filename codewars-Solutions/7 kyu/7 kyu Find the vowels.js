function vowelIndices(word) {
    const res = [];
    [...word].forEach((char, i) => /[aeiouy]/i.test(char) ? res.push(i + 1) : '');
    return res;
}

console.log(vowelIndices("mmm"), []);
console.log(vowelIndices("apple"), [1, 5]);
console.log(vowelIndices("super"), [2, 4]);
console.log(vowelIndices("orange"), [1, 3, 6]);
console.log(vowelIndices("supercalifragilisticexpialidocious"), [2, 4, 7, 9, 12, 14, 16, 19, 21, 24, 25, 27, 29, 31, 32, 33]);