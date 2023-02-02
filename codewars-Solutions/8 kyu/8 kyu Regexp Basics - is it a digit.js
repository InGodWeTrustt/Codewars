String.prototype.digit = function () {
    return /^[0-9]$/.test(this);
};

console.log(''.digit(), false);
console.log('7'.digit(), true);
console.log(' '.digit(), false);
console.log('a'.digit(), false);
console.log('a5'.digit(), false);
console.log('14'.digit(), false);