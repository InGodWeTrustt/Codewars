const array = arr => arr.split(',').slice(1, -1).join(' ') || null;

console.log(array('1,2,3') === '2');
console.log(array('1,2,3,4') === '2 3');
console.log(array('1,2,3,4,5') === '2 3 4');
console.log(array('') === null);
console.log(array('1') === null);
console.log(array('1,2') === null);