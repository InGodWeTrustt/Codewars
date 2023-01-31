function vectorLength(vector) {
    const [start, end] = vector;
    return Math.sqrt((end[0] - start[0]) ** 2 + (end[1] - start[1]) ** 2);
}


//Example
console.log(vectorLength([[0, 1],[0, 0]]),  1)
console.log(vectorLength([[0, 3],[4, 0]]),  5)
console.log(vectorLength([[1, -1],[1, -1]]),0)