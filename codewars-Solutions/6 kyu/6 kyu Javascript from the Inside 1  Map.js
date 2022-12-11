Array.prototype.map = function (cb, thisArg) {
    const res = new Array(this.length);
    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            res[i] = cb.call(thisArg, this[i], i, this)
        }
    }
    return res;
}

console.log(new Array(2).concat([null, NaN, 1]).map(x => 1));
console.log(new Array(3).concat([4]));
console.log(new Array(2).concat([null, NaN]).map(function (x) { return 1; }));