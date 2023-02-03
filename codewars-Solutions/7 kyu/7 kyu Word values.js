function wordValue(a) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    return a.map((word, i) =>
        (i + 1) * word
            .split('')
            .reduce((acc, cur) => acc + (alphabet.indexOf(cur) !== -1 ? alphabet.indexOf(cur) + 1 : 0), 0)); // we ignore space
}


console.log(wordValue(["codewars", "abc", "xyz"]), [88, 12, 225]);
console.log(wordValue(["abc abc", "abc abc", "abc", "abc"]), [12, 24, 18, 24]);