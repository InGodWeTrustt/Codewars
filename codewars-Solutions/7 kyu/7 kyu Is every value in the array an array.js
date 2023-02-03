const arrCheck = value => value.every(elem => Array.isArray(elem));

// or Instead of "Array.isArray(elem)", the following can be put "elem instanceof Array"

console.log(arrCheck([[],{}]), false);
console.log(arrCheck([[1],[2],[3]]), true);
console.log(arrCheck(['A', 'R', 'R', 'A', 'Y']), false);