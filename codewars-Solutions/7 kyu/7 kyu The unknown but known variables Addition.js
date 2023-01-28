function theVar(vars) {
    // Encrypted alphabet beginning with a = 1 to z = 26. Why?
    // in one of the tests I got "a + d" = 5 which can be in several cases 
    // if a = 0, d = 5; if a = 1, d = 4; if a = 2, b = 3; if a = 3; b = 2; 
    /**
           a b c d
           1 2 3 4 
    */
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const [char1, char2] = vars.split('+');
    // if we have a -> indexOf() return 0
    const char1Val = alphabet.indexOf(char1) + 1;
    const char2Val = alphabet.indexOf(char2) + 1;
    return char1Val + char2Val
}

console.log(theVar('a+d')); // 5
console.log(theVar('w+i')); // 32