function switcheroo(x) {
    const map = {
        a: 'b',
        b: 'a'
    }
    return x.replace(/./g, char => map[char] || char)
}

console.log(switcheroo('abc'), 'bac');
console.log(switcheroo('aaabcccbaaa'), 'bbbacccabbb'); 
console.log(switcheroo('ccccc'), 'ccccc');   