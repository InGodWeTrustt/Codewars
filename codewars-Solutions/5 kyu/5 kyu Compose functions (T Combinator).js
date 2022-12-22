var compose = function (...rest) {
    if (!rest.length) return;
    return rest.reduce((acc, fn) => fn(acc))
}

var doubleTheValue = function (v) { return v * 2 };
var addOneToTheValue = function (v) { return v + 1 };
var valueLength = function (v) { return v.length };

console.log(compose(), undefined);
console.log(compose(42), 42);
console.log(compose("Hello, world"), "Hello, world");
console.log(compose(5, doubleTheValue), 10);
console.log(compose(5, doubleTheValue, addOneToTheValue), 11);
console.log(compose("Hello, world", valueLength, doubleTheValue, addOneToTheValue), 25);
console.log(compose(1, addOneToTheValue, addOneToTheValue, addOneToTheValue, addOneToTheValue, addOneToTheValue, addOneToTheValue, addOneToTheValue, addOneToTheValue, addOneToTheValue), 10);