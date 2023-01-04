/**
 * Create a function called shortcut 
 * to remove the lowercase vowels (a, e, i, o, u ) in a given string.
 */

const shortcut = string => {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    return string.replace(/[a-z]/g, char => vowels.indexOf(char) !== -1 ? '' : char)
}

console.log(shortcut('hello'), 'hll');
console.log(shortcut('how are you today?'), 'hw r y tdy?');
console.log(shortcut('complain'), 'cmpln');
console.log(shortcut('never'), 'nvr');
