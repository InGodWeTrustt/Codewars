function count(string) {
    const obj = {};
    if (string.length) {
        [...string].forEach((char) => (obj[char] ? obj[char]++ : (obj[char] = 1)));
    }
    return obj;
}


console.log(count('')); // {}
console.log(count('aba')); // { a: 2, b: 1 }