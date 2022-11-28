String.prototype.toJadenCase = function () {
    return this.split(' ').map(char => char[0].toUpperCase()+char.slice(1)).join(' ')
};


const str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase()); // "How Can Mirrors Be Real If Our Eyes Aren't Real"

