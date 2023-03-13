const sumCodePoint = str => [...str].map(char => char.codePointAt()).reduce((a, b) => a + b, 0);

function highestValue(a, b) {
    if (sumCodePoint(b) > sumCodePoint(a)) {
        return b
    } else {
        return a;
    }
}

console.log(highestValue("AaBbCcXxYyZz0189", "KkLlMmNnOoPp4567"), "KkLlMmNnOoPp4567")
console.log(highestValue("ABcd", "0123"), "ABcd")
console.log(highestValue("!\"?$%^&*()", "{}[]@~'#:;"), "{}[]@~'#:;")
console.log(highestValue("ABCD", "DCBA"), "ABCD")