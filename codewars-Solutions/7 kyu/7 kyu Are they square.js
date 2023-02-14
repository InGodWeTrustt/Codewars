const isSquare = arr => arr.length > 0 ? arr.every(num => Number.isInteger(Math.sqrt(num))) : undefined;

// Example
console.log(isSquare([1, 4, 9, 16, 25, 36]) === true);
console.log(isSquare([1, 2, 3, 4, 5, 6]) === false);
console.log(isSquare([]) ===  undefined);
console.log(isSquare([1, 2, 4, 15]) ===  false); 