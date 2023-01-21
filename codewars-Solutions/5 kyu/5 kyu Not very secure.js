function alphanumeric(string) {
    // if the string is not empty
    if (string.length) {

        // example -> [...'test'] = ['t', 'e', 's', 't']
        // we check every character does it satisfy regular expression
        // 0-9 - digits, a-z - lower case, A-Z - upper case
        // if callbac function (char => /[a-zA-Z0-9]/.test(char)) 
        // returns false at least once, then the function every() will return false
        return [...string].every(char => /[a-zA-Z0-9]/.test(char))
    }

    return false;
}


console.log(alphanumeric("Mazinkaiser"), true)
console.log(alphanumeric("hello world_"), false)
console.log(alphanumeric("PassW0rd"), true)
console.log(alphanumeric("     "), false)