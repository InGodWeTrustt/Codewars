function spongeMeme(sentence) {
    let out = '';
    let isUpper = true;
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        out += isUpper ? char.toUpperCase() : char.toLowerCase();
        isUpper = !isUpper;
    }
    return out;
}

// Example
let actual = spongeMeme("stop Making spongebob Memes!");
console.log(actual === 'StOp mAkInG SpOnGeBoB MeMeS!');