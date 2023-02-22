function sortMyString(s) {
    const res = [[], []]
    s.split('').forEach((char, i) => i % 2 === 0 ? res[0].push(char) : res[1].push(char));
    return res.map(arr => arr.join('')).join(' ')
}


// Example
console.log(sortMyString("CodeWars") === "CdWr oeas");
console.log(sortMyString("YCOLUE'VREER") === "YOU'RE CLEVER"); 