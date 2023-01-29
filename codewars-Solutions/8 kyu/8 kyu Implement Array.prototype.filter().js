Array.prototype.filter = function (func) {
    const res = []
    this.forEach(num => func(num) ? res.push(num) : '')
    return res;
}

console.log([1, 2, 3, 4].filter((num) => { return num > 3 })); // [4]