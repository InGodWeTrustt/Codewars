Array.prototype.square = function () {
    return this.map(x => x ** 2)
}

Array.prototype.cube = function () {
    return this.map(x => x ** 3)
}

Array.prototype.average = function () {
    if (!this.length) return NaN;
    return this.sum() / this.length
}

Array.prototype.sum = function () {
    return this.reduce((acc, cur) => acc + cur, 0)
}

Array.prototype.even = function () {
    return this.filter(x => x % 2 === 0)
}

Array.prototype.odd = function () {
    return this.filter(x => x % 2 !== 0)
}

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.square(), [1, 4, 9, 16, 25]);
console.log(numbers.cube(), [1, 8, 27, 64, 125]);
console.log(numbers.sum(), 15);
console.log(numbers.average(), 3);
console.log(numbers.even(), [2, 4]);
console.log(numbers.odd(), [1, 3, 5]);