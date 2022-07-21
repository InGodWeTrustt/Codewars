/**
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 ,"implementation".
 */

/**
 * 
 * @param {string} msg 
 * @returns 
 */
function rot13(msg) {
    return [...msg].map(char => {
        let dif, charCase, charCode = char.codePointAt();
        const mapCase = {
            'a-z': ['a'.codePointAt(), 'z'.codePointAt()], // [97,122]
            'A-Z': ['A'.codePointAt(), 'Z'.codePointAt()], // [65,90],
        }
        if (charCode >= mapCase['a-z'][0] && charCode <= mapCase['a-z'][1]) {
            charCase = 'a-z';
        } else if (charCode >= mapCase['A-Z'][0] && charCode <= mapCase['A-Z'][1]) {
            charCase = 'A-Z';
        }
        if (charCase === 'a-z') {
            if (charCode + 13 > mapCase['a-z'][1]) {
                dif = charCode - 13
            } else {
                dif = charCode + 13
            }
        } else if (charCase === 'A-Z') {
            if (charCode + 13 > mapCase['A-Z'][1]) {
                dif = charCode - 13
            } else {
                dif = charCode + 13
            }
        } else {
            dif = charCode;
        }

        // space, |, # ...
        return String.fromCodePoint(dif)
    }).join('')
}

console.log(rot13('test')); // grfg
console.log(rot13('Test')); // Grfg
console.log(rot13('Ruby is cool!')); // Ehol-vf-pbby.
console.log(rot13('MD`K|xhf#CQoU0k')); // 
