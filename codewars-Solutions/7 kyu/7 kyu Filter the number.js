var filterString = function (value) {
    return +value.replace(/[^0-9]/g, '');
}

console.log(filterString("123"), 123, 'Just return the numbers');
console.log(filterString("a1b2c3"), 123, 'Just return the numbers');
console.log(filterString("aa1bb2cc3dd"), 123, 'Just return the numbers');