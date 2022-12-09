function validParentheses(parens) {
    const stack = []
    const map = { ')': '(', }

    for (let i = 0; i < parens.length; i++) {
        const char = parens[i];

        if (char === '(') {
            stack.push(char);
        } else {
            const lastChar = stack.pop() || 0;
            if (lastChar !== map[char] /**(*/) {
                return false
            }
        }
    }

    return stack.length === 0
}

console.log(validParentheses("()"), true);
console.log(validParentheses("())"), false);