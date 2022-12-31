/**
    Replaces every letter with the letter following it in the alphabet (see note below)
    Makes any vowels capital
    Makes any consonants lower case
 */

function changer(str) {
    const alph = 'abcdefghijklmnopqrstuvwxyz',
        vowels = ['a', 'e', 'i', 'o', 'u'];

    return str.replace(/[a-z]/gi, char => {
        const idx = alph.indexOf(char.toLowerCase());
        const letter = idx+1 === alph.length ? alph[0] :  alph[idx+1];

        if (vowels.indexOf(letter) !== -1) {
            return letter.toUpperCase()
        }

        return letter.toLowerCase()
    })
}


console.log(changer('z')); // A
console.log(changer('sponge1')); //'tqpOhf1'
console.log(changer('Cat30'), 'dbU30');