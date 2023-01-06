function consonantCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return [...str.replace(/[^a-z]/gi, '')].filter(char => vowels.indexOf(char) === -1).length;
}


console.log(consonantCount(''), 0, 'Test string is empty string');
console.log(consonantCount('aaaaa'), 0, 'Test string: "aaaaa"');
console.log(consonantCount('XaeiouX'), 2, 'Test string: "XaeiouX"');
console.log(consonantCount('Bbbbb'), 5, 'Test string: "Bbbbb"');
console.log(consonantCount('helLo world'), 7, 'Test string: "helLo world"');
console.log(consonantCount('h^$&^#$&^elLo world'), 7, 'Test string: "h^$&^#$&^elLo world"');
console.log(consonantCount('0123456789'), 0, 'Test string: "0123456789"');
console.log(consonantCount('012345_Cb'), 2, 'Test string: "012345_Cb"');

