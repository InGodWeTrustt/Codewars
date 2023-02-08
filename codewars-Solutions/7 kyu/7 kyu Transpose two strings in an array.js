function transposeTwoStrings(array) {
    let res = [];
    let maxLength = Math.max(array[0].length, array[1].length);

    for (let i = 0; i < maxLength; i++) {
        const str = `${array[0][i] || ' '} ${array[1][i] || ' '}`;
        res.push(str);
    }

    return res.join('\n');
}

console.log(transposeTwoStrings(['Hello', 'World'])); // "H W\ne o\nl r\nl l\no d"
console.log(transposeTwoStrings(['joey', 'louise'])); // "j l\no o\ne u\ny i\n  s\n  e"
console.log(transposeTwoStrings(['a', 'cat'])); //  "a c\n  a\n  t"
console.log(transposeTwoStrings(['cat', ''])); // "c  \na  \nt  "
console.log(transposeTwoStrings(['!a!a!', '?b?b'])); // "! ?\na b\n! ?\na b\n!  "