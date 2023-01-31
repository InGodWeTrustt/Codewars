Function.prototype.clone = function () {
    const fnStr = this.toString()
    const args = fnStr.match(/\(([^)]*)\)/)[1];
    const body = fnStr.match(/\{(.*)\}/)[1]
    return new Function([...args.split(',')], body)
};


// Example
var original = function original_name(a, b) { if(true) {return a + b;} };

var cloned = original.clone();
console.log(cloned(4,5));