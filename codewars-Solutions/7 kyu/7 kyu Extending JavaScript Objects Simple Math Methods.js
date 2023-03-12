Number.prototype.add = function (x) {
    return this + x;
}

Number.prototype.sub = function (x) {
    return this - x;
}

Number.prototype.mul = function (x) {
    return this * x;
}

Number.prototype.div = function (x) {
    return this / x;
}

Number.prototype.pow = function (x) {
    return this ** x;
}

Number.prototype.sqr = function () {
    return Math.sqrt(this);
}

// Example
let n = 25;  
console.log(n.add(4), 29);
console.log(n.sub(3), 22);
console.log(n.mul(2), 50);
console.log(n.div(5), 5);
console.log(n.pow(2), 625);
console.log(n.sqr(), 5);
console.log(n.add(5).div(2).mul(3).sub(35).pow(2).sqr(), 10);