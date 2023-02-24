function cramerSolver(matrix, vector) {
    if (matrix.length !== vector.length || !matrix.every(arr => matrix[0].length === arr.length)) {
        return "Check entries"
    }

    const res = [];
    const det = detMatrix(matrix);
    res.push(det);

    for (let i = 0; i < matrix[0].length; i++) {
        const matrixNew = changeElement(matrix, i, vector);
        const detXi = detMatrix(matrixNew);
        res.push(detXi);
    }

    if (det === 0 && res.slice(1).every(num => num === 0)) {
        return 'Indeterminate or Unsolvable'
    } else if (det === 0 && res.slice(1).filter(num => num !== 0).length > 1) {
        return 'Unsolvable'
    }

    return res;
}


function changeElement(arr, index, y) {
    const copy = JSON.parse(JSON.stringify(arr));
    copy.forEach((arr, i) => arr[index] = y[i]);
    return copy;
}

function detMatrix(matrix) {
    if (matrix.length == 2)
        return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];

    let det = 0;
    for (let i = 0; i < matrix.length; i++) {
        const minor = getMinor(matrix, i);
        det += (i % 2 == 1 ? -1 : 1) * matrix[0][i] * detMatrix(minor);
    }
    return det;
}

function getMinor(matrix, i) {
    const minor = [];
    for (let j = 1; j < matrix.length; j++) {
        minor.push([]);
        for (let k = 0; k < matrix.length; k++) {
            if (k != i) minor[j - 1].push(matrix[j][k]);
        }
    }
    return minor;
}

// Example
let matrix = [[4, -6, -3], [1, 1, -2], [4, -20, -4]];
let vector = [12, 3, 6];
console.log(cramerSolver(matrix, vector), [-80, -330, -30, -60]);

// Determinant delta is 0 and, at least, one deltaXi is not 0
matrix = [[1, 1, -3], [1, 1, -2], [1, 1, -4]];
vector = [12, 3, 6];
console.log(cramerSolver(matrix, vector) === "Unsolvable");

// Determinant delta is 0 and all the deltaXi are 0
matrix = [[1, 1, -3], [1, 1, -2], [1, 1, -4]];
vector = [0, 0, 0];
console.log(cramerSolver(matrix, vector) === "Indeterminate or Unsolvable");

// Bad inputs. Matrix is not square
matrix = [[1, 1, -3, 4], [1, 1, -2, 3], [1, 1, -4, 2], [6, 4, 2, 1]];
vector = [1, 1, 1];
console.log(cramerSolver(matrix, vector) === "Check entries");

// BadInputs. Lengths of the rows of the matrix are not equal
matrix = [[1, 1, -3], [1, 1], [1, 1, -4]];
vector = [-10, 3, -6];
console.log(cramerSolver(matrix, vector) === "Check entries");

// Bad inputs. Length of matrix and vector do not coincide
matrix = [[1, 1, -3, 4], [1, 1, -2, 3], [1, 1, -4, 2], [6, 4, 2, 1]]
vector = [1, 1, 1];
console.log(cramerSolver(matrix, vector) === "Check entries");

matrix = [[1, 1, -3, 4], [1, 1, -2, 3], [1, 1, -4, 2], [6, 4, 2, 1]];
vector = [1, 4, 3, 6];
console.log(cramerSolver(matrix, vector), [6, -125, 195, 8, -10]);

matrix = [[1, 1, -3, 4, 0], [1, 1, -2, 3, -1], [1, 1, -4, 2, 4], [6, 4, 2, 1, 6], [4, -2, 6, 7, -1]];
vector = [1, 4, 3, 6, -7];
console.log(cramerSolver(matrix, vector), [-258, -2890, 1620, 1396, 1300, 870]);