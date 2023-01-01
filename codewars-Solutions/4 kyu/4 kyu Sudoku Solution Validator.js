const isValidRow = arr => {
    const copy = [...arr]
    const validateStr = '123456789';
    copy.sort((a, b) => a - b)
    return copy.join('') === validateStr;
}

const arrColumns = arr => {
    const res = []
    let iCol = 0;
    while (iCol < arr.length) {
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i][iCol];
            (res[iCol] ??= []).push(element)
        }
        iCol++;
    }
    return res;
}

const arraySquare3x3 = arr => {
    const res = [[]];
    let indexToInsert = [0, 1, 2];

    for (let i = 0; i < arr.length; i++) {
        const row = arr[i]

        for (let j = 0; j < row.length; j += 3) {
            const threeElem = row.slice(j, j + 3);
            if (res[res.length - 1].length < arr.length) {
                (res[indexToInsert[j / 3]] ??= []).push(...threeElem)
            } else {
                // [0,1,2] -> [3,4,5] -> [6,7,8]
                indexToInsert = indexToInsert.map(value => value + 3);
                (res[indexToInsert[j / 3]] ??= []).push(...threeElem)
            }
        }
    }
    return res;
}


function validSolution(board) {
    const newBoard = [...board, ...arrColumns(board), ...arraySquare3x3(board)]
    return newBoard.every(row => isValidRow(row))
}




// console.log(arraySquare3x3(
//     [
//         [5, 3, 4, 6, 7, 8, 9, 1, 2],
//         [6, 7, 2, 1, 9, 5, 3, 4, 8],
//         [1, 9, 8, 3, 4, 2, 5, 6, 7],
//         [8, 5, 9, 7, 6, 1, 4, 2, 3],
//         [4, 2, 6, 8, 5, 3, 7, 9, 1],
//         [7, 1, 3, 9, 2, 4, 8, 5, 6],
//         [9, 6, 1, 5, 3, 7, 2, 8, 4],
//         [2, 8, 7, 4, 1, 9, 6, 3, 5],
//         [3, 4, 5, 2, 8, 6, 1, 7, 9]
//     ]
// ));


// console.log(validSolution([
//     [
//         1, 2, 3, 4, 5, 6, 7, 8, 9
//     ],
//     [
//         2, 3, 1, 5, 6, 4, 8, 9, 7
//     ],
//     [
//         3, 1, 2, 6, 4, 5, 9, 7, 8
//     ],
//     [
//         4, 5, 6, 7, 8, 9, 1, 2, 3
//     ],
//     [
//         5, 6, 4, 8, 9, 7, 2, 3, 1
//     ],
//     [
//         6, 4, 5, 9, 7, 8, 3, 1, 2
//     ],
//     [
//         7, 8, 9, 1, 2, 3, 4, 5, 6
//     ],
//     [
//         8, 9, 7, 2, 3, 1, 5, 6, 4
//     ],
//     [
//         9, 7, 8, 3, 1, 2, 6, 4, 5
//     ]
// ])); // false

// console.log(validSolution([
//     [5, 3, 4, 6, 7, 8, 9, 1, 2],
//     [6, 7, 2, 1, 9, 5, 3, 4, 8],
//     [1, 9, 8, 3, 4, 2, 5, 6, 7],
//     [8, 5, 9, 7, 6, 1, 4, 2, 3],
//     [4, 2, 6, 8, 5, 3, 7, 9, 1],
//     [7, 1, 3, 9, 2, 4, 8, 5, 6],
//     [9, 6, 1, 5, 3, 7, 2, 8, 4],
//     [2, 8, 7, 4, 1, 9, 6, 3, 5],
//     [3, 4, 5, 2, 8, 6, 1, 7, 9]]), true);

// console.log(validSolution([
//     [5, 3, 4, 6, 7, 8, 9, 1, 2],
//     [6, 7, 2, 1, 9, 0, 3, 4, 8],
//     [1, 0, 0, 3, 4, 2, 5, 6, 0],
//     [8, 5, 9, 7, 6, 1, 0, 2, 0],
//     [4, 2, 6, 8, 5, 3, 7, 9, 1],
//     [7, 1, 3, 9, 2, 4, 8, 5, 6],
//     [9, 0, 1, 5, 3, 7, 2, 1, 4],
//     [2, 8, 7, 4, 1, 9, 6, 3, 5],
//     [3, 0, 0, 4, 8, 1, 1, 7, 9]]), false);