function validateWord(word) {
    word = word.toLowerCase();
    const counts = {};

    [...word].forEach(char => counts[char] = (counts[char] || 0) + 1);
    const values = Object.values(counts);
    const firstValue = values[0];

    for (let i = 1; i < values.length; i++) {
        if (values[i] !== firstValue) {
            return false;
        }
    }

    return true;
}

console.log(validateWord("abcabc"),true, "The word was: \"abcabc\" \n");
console.log(validateWord("Abcabc"),true, "The word was: \"Abcabc\" \n");
console.log(validateWord("abc123"),true, "The word was: \"abc123\" \n");
console.log(validateWord("abcabcd"),false, "The word was: \"abcabcd\" \n");
console.log(validateWord("abc!abc!"),true, "The word was: \"abc!abc!\" \n");
console.log(validateWord("abc:abc"),false, "The word was: \"abc:abc\" \n");