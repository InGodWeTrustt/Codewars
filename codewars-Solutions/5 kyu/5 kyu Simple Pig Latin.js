/**
 * pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
 * pigIt('Hello world !');     // elloHay orldway !
 */

function pigIt(str) {
    return str.split(' ').map(str => str.replace(/(\w{1})([a-z]+)?/, '$2$1ay')).join(' ')
}

console.log(pigIt('Pig latin is cool')); // 'igPay atinlay siay oolcay'
console.log(pigIt('O emporatay o oresmay !')); // 'igPay atinlay siay oolcay'
