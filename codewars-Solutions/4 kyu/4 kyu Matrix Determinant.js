// Расчет определителя матрицы

function determinant(M) {
    const subM = [];
    const n = M.length;
    let detM = 0;
    if (M[0].length === 1) return M[0][0];
    if (M[0].length === 2) {
        return M[0][0] * M[1][1] - M[0][1] * M[1][0];
    }
    if (M.length === 3) {
        return M[0][0] * (M[1][1] * M[2][2] - M[1][2] * M[2][1]) - M[0][1] * (M[1][0] * M[2][2] - M[1][2] * M[2][0]) + M[0][2] * (M[1][0] * M[2][1] - M[1][1] * M[2][0])
    }

    for (let i = 0; i < n; i++) {
        for (let h = 0; h < n - 1; h++) subM[h] = [];
        for (let a = 1; a < n; a++) {
            for (let b = 0; b < n; b++) {
                if (b < i) subM[a - 1][b] = M[a][b];
                else if (b > i) subM[a - 1][b - 1] = M[a][b];
            }
        }
        let sign = (i % 2 == 0) ? 1 : -1;
        detM += sign * M[0][i] * determinant(subM);
    }
    return detM;
};

console.log(determinant([[1]])); //1
console.log(determinant([[2, 3], [4, 5]])); // -2
console.log(determinant([[4, 6], [3, 8]])); //14
console.log(determinant([[2, 4, 2], [3, 1, 1], [1, 2, 0]])); // 10
console.log(determinant([[4,3,2,2], [0,1,0,-2], [1,-1,3,3], [2,3,1,1]])); // 30