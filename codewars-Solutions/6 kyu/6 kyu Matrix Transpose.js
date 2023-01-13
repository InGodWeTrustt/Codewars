function transpose(matr) {
    const res = [];
    for (let i = 0; i < matr.length; i++) {
        for (let j = 0; j < matr[i].length; j++) {
            const element = matr[i][j];
            if (!res[j]) {
                res[j] = [element];
            } else {
                res[j].push(element);
            }
        }
    }
    return res;
}

console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); //  [[1, 4, 7], [2, 5, 8], [3, 6, 9]]