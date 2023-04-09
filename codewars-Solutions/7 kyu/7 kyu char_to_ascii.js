function charToAscii(string) {
    if (!string.length) return null;

    const map = {};
    string.replace(/[^a-z]/gi, '').split('').forEach(word => {
        if (!map[word]) {
            map[word] = word.codePointAt()
        }
    })

    return map;
}

// Example
console.log(charToAscii(""), null, "deals with an empty str");
console.log(charToAscii("a"), { "a": 97 }, "deals with one char");
console.log(charToAscii("aaa"), { "a": 97 }, "deals with repeated characters");
console.log(charToAscii("hello world"), { "h": 104, "e": 101, "l": 108, "o": 111, "w": 119, "r": 114, "d": 100 }, "deals with spaces");
console.log(charToAscii("ABaa ^"), { "A": 65, "B": 66, "a": 97 }, "deals with uppercase characters and non alphebetic characters");