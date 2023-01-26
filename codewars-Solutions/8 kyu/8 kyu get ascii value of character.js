function getASCII(c){
    return c.codePointAt();
}


console.log(getASCII('A'),65)
console.log(getASCII(' '),32)
console.log(getASCII('!'),33)