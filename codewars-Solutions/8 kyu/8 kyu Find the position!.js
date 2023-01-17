function position(letter) {
    const pos = 'abcdefghijklmnopqrstuvwxyz'.indexOf(letter) + 1;
    return `Position of alphabet: ${pos}`
}

console.log(position("a")); // "Position of alphabet: 1"
console.log(position("z")); // "Position of alphabet: 26"
console.log(position("e")); // "Position of alphabet: 5"