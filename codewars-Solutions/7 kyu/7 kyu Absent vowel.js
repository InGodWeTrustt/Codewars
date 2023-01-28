function absentVowel(x) {
    const vowels = 'aeiou';
    const vowel = x.match(/[aeiou]/gi).join('').toLowerCase();
    let idx;

    for (let i = 0; i < vowels.length; i++) {
        if (!vowel.includes(vowels[i])) {
            idx = i;
            break;
        }
    }
    return idx;
}

console.log(absentVowel("John Doe hs seven red pples under his bsket"), 0);
console.log(absentVowel("Bb Smith sent us six neatly arranged range bicycles"), 3);