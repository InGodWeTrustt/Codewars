// multiplyAll([1, 2, 3])(2) = [2, 4, 6];

const multiplyAll = array => num => array.map(elem => elem * num);

console.log(multiplyAll([1,2,3])(2)); // [ 2, 4, 6 ]
console.log(multiplyAll([])(2)); // []