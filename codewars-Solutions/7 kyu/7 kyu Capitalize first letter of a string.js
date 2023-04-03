String.prototype.capitalize = function () {
    const charCode = this[0].codePointAt();

    if (charCode > 96) {
        // Example: 'a'.codePointAt() = 97; 'A'.codePointAt() = 65
        const dif = charCode - 32; 
        return `${String.fromCodePoint(dif)}${this.slice(1)}`
    }

    return '' + this;
}

console.log("hello world".capitalize() === "Hello world");
console.log("an apple a day keeps the doctor away".capitalize() === "An apple a day keeps the doctor away");
console.log("today, I have a dream ... ".capitalize() === "Today, I have a dream ... ");