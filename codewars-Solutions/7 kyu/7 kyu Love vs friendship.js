function wordsToMarks(string) {
    const alph = 'abcdefghijklmnopqrstuvwxyz';
    return string.split('').reduce((a, b) => a + alph.indexOf(b) + 1, 0)
}

// Example
console.log(wordsToMarks("attitude"), 100);
console.log(wordsToMarks("friends"), 75);
console.log(wordsToMarks("family"), 66);
console.log(wordsToMarks("selfness"), 99);
console.log(wordsToMarks("knowledge"), 96);