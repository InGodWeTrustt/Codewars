var FilterNumbers = function (str) {
    return str.replace(/[0-9]/g, '')
}

console.log(FilterNumbers("test123")); // 'test'
console.log(FilterNumbers("a1b2c3")) //  'abc'