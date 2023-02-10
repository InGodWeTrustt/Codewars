Array.prototype.map = function(callback, thisArg){
    const output = [];
    thisArg = thisArg ? thisArg : this;

    for (let i = 0; i < thisArg.length; i++) {
        const element = thisArg[i];
        output.push(callback.call(thisArg, element, i, thisArg))
    }

    return output;
}

// Example
console.log([1,2,3].map(x => x ** 2)); // [1,4,9]
console.log([1,2,3].map(x => 2 * x)); // [2,4,6]