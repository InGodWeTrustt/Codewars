class Vector {
    constructor(components) {
        this._massiv = components
    }

    get arr() {
        return this._massiv
    }

    add(vector) {
        this.validate(this.arr, vector.arr)

        const res = []
        for (let i = 0; i < this.arr.length; i++) {
            res.push(this.sum(this.arr[i], vector.arr[i]))
        }
        return new Vector(res)
    }

    subtract(vector) {
        this.validate(this.arr, vector.arr)

        const res = []
        for (let i = 0; i < this.arr.length; i++) {
            res.push(this.subtraction(this.arr[i], vector.arr[i]))
        }

        return new Vector(res)
    }

    dot(vector) {
        this.validate(this.arr, vector.arr)
        return this.arr.map((num, i) => num * vector.arr[i]).reduce(this.sum)
    }

    norm() {
        return Math.sqrt(this.arr.reduce((acc, cur) => acc + Math.pow(cur, 2), 0))
    }

    equals(vector) {
        return this.toString() === vector.toString()
    }
}


Vector.prototype.sum = (a, b) => a + b;

Vector.prototype.subtraction = (a, b) => a - b;

Vector.prototype.validate = (a, b) => {
    if (a.length !== b.length) {
        throw new Error(`length must be equal`)
    }
};

Vector.prototype.toString = function () {
    return `(${this.arr})`
}


var a = new Vector([1, 2, 3]);
var b = new Vector([3, 4, 5]);
var c = new Vector([5, 6, 7, 8]);

console.log(a.add(b));      // should return a new Vector([4, 6, 8])
console.log(a.subtract(b)); // should return a new Vector([-2, -2, -2])
console.log(a.dot(b));      // should return 1*3 + 2*4 + 3*5 = 26
// console.log(a.norm());      // should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
// console.log(a.add(c));      // throws an error
console.log(a.toString());

a = new Vector([1, 2]);
b = new Vector([3, 4]);
console.log(a.add(b).equals(new Vector([4, 6])));