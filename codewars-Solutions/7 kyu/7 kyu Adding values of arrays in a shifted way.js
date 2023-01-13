function addingShifted(arr, shift) {
    const rowsCount = arr.length;
    const lenArr = shift > 0 ? (rowsCount - 1) * shift + arr[0].length : arr[0].length;
    const res = []

    for (let i = 0; i < lenArr; i++) {
        let sum = 0;

        for (let j = 0; j < rowsCount; j++) {
            sum += arr[j][j > 0 ? i - shift * j : i] || 0;
        }

        res.push(sum)
    }

    return res;

}


const arrayOfArrays = [[1, 2, 3, 4, 5, 6],[7, 7, 7, 7, 7, 7]];
const expected = [ 1, 2, 3, 11, 12, 13, 7, 7, 7];
const result = addingShifted(arrayOfArrays, 3);

console.log(result);