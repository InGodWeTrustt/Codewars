Array.prototype.sum = function () {
    return this.reduce((a, b) => a + b, 0)
}


var arr = [1, 2, 3, 4];
console.log(arr.sum());  //returns 10

var arr = [10, 28, 14, 33];
console.log(arr.sum()); //returns 85