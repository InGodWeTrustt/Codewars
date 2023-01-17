// [4,3,9,7,2,1] -> [2,9,3,49,4,1]

function squareOrSquareRoot(array) {
    return array.map(num => Number.isInteger(Math.sqrt(num)) ? Math.sqrt(num) : num ** 2);
}

const input = [ 100, 101, 5, 5, 1, 1 ];

console.log(squareOrSquareRoot(input)); // [ 10, 10201, 25, 25, 1, 1 ];