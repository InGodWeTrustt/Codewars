function alphabetPosition(text) {
    return text
        .replace(/[^a-z]/gi, '')
        .replace(/([a-z])/gi, '$1 ')
        .replace(/[a-z]/gi, c => /[a-z]/.test(c) ? c.codePointAt(c) - 96 : c.codePointAt() - 64)
        .trim();
}


console.log(alphabetPosition("The sunset sets at twelve o' clock.")); //20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11 
console.log(alphabetPosition("2z^|^yh?")); // 26 25 8

