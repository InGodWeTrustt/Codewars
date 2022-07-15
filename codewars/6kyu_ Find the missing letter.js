/**
    ["a","b","c","d","f"] -> "e"
    ["O","Q","R","S"] -> "P"
 */

function findMissingLetter(array) {
    const codeFirstLetter = array[0].codePointAt()
    let lastLetterCode = codeFirstLetter
    let missLetterCode;

    for (let i = 0; i < array.length; i++) {
        const char = array[i].codePointAt()
        if (char - lastLetterCode > 1) {
            missLetterCode = char-1;
            break;
        }
        lastLetterCode = char
    }

    return String.fromCodePoint(missLetterCode)
}

console.log(findMissingLetter(["a", "b", "c", "d", "f"]));
console.log(findMissingLetter(["O","Q","R","S"]));
