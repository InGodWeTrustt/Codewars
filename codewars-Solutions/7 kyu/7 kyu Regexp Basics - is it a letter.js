String.prototype.isLetter = function () {
    return /^[a-z]$/i.test(this)
}


console.log("".isLetter(), false);
console.log("a".isLetter(), true);
console.log("X".isLetter(), true);
console.log("7".isLetter(), false);
console.log("*".isLetter(), false);
console.log("ab".isLetter(), false);
console.log("a\n".isLetter(), false);