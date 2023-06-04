function makeLatinSquare(n) {
    let square = [];
    for (let i = 0; i < n; i++) {
        square[i] = [];
        for (let j = 0; j < n; j++) {
            square[i][j] = (i + j) % n + 1;
        }
    }
    return square;
}