function extend() {
    var newObj = {};
    for (var i = 0; i < arguments.length; i++) {
        if (isObject(arguments[i])) {
            for (var prop in arguments[i]) {
                if (!newObj.hasOwnProperty(prop)) {
                    newObj[prop] = arguments[i][prop];
                }
            }
        }
    }
    return newObj;
}

function isObject(obj) {
    return obj === Object(obj);
}


console.log(extend({a: 1, b: 2}, {c: 3})); // {a: 1, b: 2, c: 3}
console.log(extend({a: 1, b: 2}, {c: 3}, {d: 4})); // {a: 1, b: 2, c: 3, d: 4}
console.log(extend({a: 1, b: 2}, {a: 3, c: 3})); // {a: 3, b: 2, c: 3}
console.log(extend({a: 1, b: 2}, {c: 3}, {d: 5})); // {a: 1, b: 2, c: 3, d: 5}