const find = (a, elem) => a.indexOf(elem) >= 0 ? a.indexOf(elem) : 'Not found';

// Example
var array = [2, 3, 5, 7, 11];
console.log(find(array, 5), 2);
console.log(find(array, 11), 4);
console.log(find(array, 3), 1);
console.log(find(array, 2), 0);
console.log(find(array, 7), 3);
console.log(find(array, 1), "Not found");
console.log(find(array, 8), "Not found");