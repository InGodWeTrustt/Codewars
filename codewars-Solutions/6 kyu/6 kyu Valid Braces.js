/**
 * 
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
 */

function validBraces(s) {
    const stack = []
    const brackets = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    for (let i = 0; i < s.length; i++) {
        if ([')', '}', ']'].indexOf(s[i]) > -1) {
            if (brackets[s[i]] !== stack.pop()) return false;
        } else {
            stack.push(s[i])
        }
    }

    return stack.length === 0
}


console.log(validBraces('()')) // true