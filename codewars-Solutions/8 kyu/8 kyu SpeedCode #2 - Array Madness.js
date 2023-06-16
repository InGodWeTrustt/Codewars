function arrayMadness(a, b) {
    let sumOfSquares = 0;
    let sumOfCubes = 0;
    for (let i = 0; i < a.length; i++) {
        sumOfSquares += a[i] ** 2;
    }
    for (let j = 0; j < b.length; j++) {
        sumOfCubes += b[j] ** 3;
    }
    return sumOfSquares > sumOfCubes;
}


console.log(arrayMadness([4,5,6],[1,2,3]), true);
console.log(arrayMadness([5,6,7],[4,5,6]), false);
console.log(arrayMadness([4,5,6],[3,4,5]), false);

