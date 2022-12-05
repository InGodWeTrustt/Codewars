/**
    "hello case".camelCase() => HelloCase
    "camel case word".camelCase() => CamelCaseWord
 */


String.prototype.camelCase = function () {
    return this.trim().split(' ').map(word => word.length ? word[0].toUpperCase() + word.slice(1) : '').join('')
}

console.log("test case".camelCase(), "TestCase");