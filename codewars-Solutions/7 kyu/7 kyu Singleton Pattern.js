let instance = null;
var Singleton = function () {
    if (!instance) {
        instance = this;
        return this;
    }
    return instance
};


var obj1 = new Singleton();
var obj2 = new Singleton();
console.log(obj1 === obj2); // => true