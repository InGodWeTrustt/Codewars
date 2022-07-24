
function isPangram(string) {
    const strToLowerCase = string.toLowerCase(); //в нижний регистр перевожу всю последовательность символов строки
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    //  заменяю каждый символ строки алфавита на 1 или саму букву в зависимости от того найдена она в исходной строке или нет
    return alphabet.replace(/./gi, c => strToLowerCase.indexOf(c) !== -1 ? 1 : c).split('').every(num => +num === 1)
}


console.log(isPangram('Cwm fjord bank glyphs vext quiz'));
console.log(isPangram("The quick brown fox jumps over the lazy dog.")); // true
console.log(isPangram('This is not a pangram.'));