/**
    [1, 2, 3], [4, 5, 6]              -->   9   because (9 + 9 + 9) / 3
    [10, 20, 10, 2], [10, 25, 5, -2]  -->  16.5 because (0 + 25 + 25 + 16) / 4
    [-1, 0], [0, -1]                  -->   1   because (1 + 1) / 2
 */

var solution = function (arr1, arr2) {
    const res = []

    for (let i = 0; i < arr1.length; i++) {
        const dif = Math.abs(arr1[i] - arr2[i])
        const square = dif ** 2; 
        res.push(square)
    }

    const avg = res.reduce((a, b) => a + b, 0) / res.length
    return avg
}


console.log(solution([1,2,3],[4,5,6]), 9)
console.log(solution([10,20,10,2],[10,25,5,-2]), 16.5)
console.log(solution([0,-1], [-1,0]), 1)