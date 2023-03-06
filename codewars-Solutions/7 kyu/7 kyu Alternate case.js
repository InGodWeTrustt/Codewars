function alternateCase(s) {
    return s.split('')
        .map(char => /[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase())
        .join('')
}

console.log(alternateCase("abc") === "ABC");
console.log(alternateCase("ABC") === "abc");
console.log(alternateCase("Hello World") === "hELLO wORLD");
console.log(alternateCase("CodeWars") === "cODEwARS");
console.log(alternateCase("i LIKE MAKING KATAS VERY MUCH!") === "I like making katas very much!");