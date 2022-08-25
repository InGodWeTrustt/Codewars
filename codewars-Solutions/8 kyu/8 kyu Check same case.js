/**
 * 'a' and 'g' returns 1
'A' and 'C' returns 1
'b' and 'G' returns 0
'B' and 'g' returns 0
'0' and '?' returns -1
 */

function sameCase(a, b) {
    if (!a.match(/[a-z]/gi) || !b.match(/[a-z]/gi)) return -1;
    const upperAlp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowAlp = 'abcdefghijklmnopqrstuvwxyz';
    if (upperAlp.indexOf(a) !== -1 && upperAlp.indexOf(b) !== -1) return 1;
    if (lowAlp.indexOf(a) !== -1 && lowAlp.indexOf(b) !== -1) return 1;
    return 0;
}

console.log(sameCase('a', 'c'));
console.log(sameCase('a', 'C'));
console.log(sameCase('0', '?'));