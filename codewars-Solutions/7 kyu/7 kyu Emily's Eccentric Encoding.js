/*
let alph = ''
for(let i = 97; i <=122; i++){
    alph += String.fromCodePoint(i);
}

let revAlph = alph.split('').reverse().join('')

console.log(revAlph);
*/

function decode(str) {
    const alph = 'abcdefghijklmnopqrstuvwxyz ';
    const revAlph = 'zyxwvutsrqponmlkjihgfedcba'
    return str.replace(/[a-z]/g, char => {
        const index = alph.indexOf(char)
        return revAlph[index]
    })
}

console.log(decode("I dlfow orpv gl rmgviervd lm Mlmwzb nlimrmt!"));