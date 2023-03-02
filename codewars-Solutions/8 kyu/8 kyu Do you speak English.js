function spEng(sentence) {
    return /english/i.test(sentence);
}

console.log(spEng("english"), true);
console.log(spEng("egnlish"), false);
console.log(spEng("1234egn lis;h"), false);
console.log(spEng("1234english ;k"), true);