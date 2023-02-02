function mainDiagonalProduct(mat) {
    let res = 1;
    for (let i = 0; i < mat.length; i++) {
        res *= mat[i][i];
    }
    return res;
}

console.log(mainDiagonalProduct([[1, 0], [0, 1]]), 1);
console.log(mainDiagonalProduct([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), 45);