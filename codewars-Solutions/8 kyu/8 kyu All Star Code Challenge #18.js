function strCount(str, letter) {
    const cache = {};
    [...str].forEach(char => cache[char] ? cache[char]++ : cache[char] = 1);
    return cache[letter] || 0;
}


console.log(strCount('Hello', 'o'), 1);
console.log(strCount('Hello', 'l'), 2);
console.log(strCount('',      'z'), 0);