/**
 * "din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
 */
function duplicateEncode(word) {
    const map = {};
    const copy = [...word].map(w => w.toLowerCase());
    copy.forEach(char => map[char] ? map[char]++ : map[char] = 1);
    const resStr = copy
        .map(char => map[char] < 2 ? '(' : ')')
        .join('');
    return resStr;
}


console.log(duplicateEncode("din"), "(((");
console.log(duplicateEncode("recede"), "()()()");