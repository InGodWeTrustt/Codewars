/**
even    // [1,2,3,4,5].even() should return [2,4]
odd     // [1,2,3,4,5].odd() should return [1,3,5]
under   // [1,2,3,4,5].under(4) should return [1,2,3]
over    // [1,2,3,4,5].over(4) should return [5]
inRange // [1,2,3,4,5].inRange(1,3) should return [1,2,3]
 */

Array.prototype.even = function () {
    return this.filter(num => num % 2 === 0 && typeof num === 'number' && Number.isInteger(num))
}

Array.prototype.odd = function () {
    return this.filter(num => num % 2 !== 0 && typeof num === 'number' && Number.isInteger(num))
}

Array.prototype.under = function (x) {
    return this.filter(num => num < x && typeof num === 'number' && Number.isInteger(num))
}

Array.prototype.over = function (x) {
    return this.filter(num => num > x && typeof num === 'number' && Number.isInteger(num))
}

Array.prototype.inRange = function (min, max) {
    return this.filter(num => num >= min && num <= max && typeof num === 'number' && Number.isInteger(num))
}

