function allNonConsecutive(arr) {
    const res = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] > 1) {
            res.push({ i: i + 1, n: arr[i + 1] })
        }
    }

    return res
}

const results = allNonConsecutive([-5, -3, -2, 0, 1, 2, 3, 4, 6, 7, 8, 10])
console.log(results) // [{ i: 1, n: -3 }, { i: 3, n: 0 }, { i: 8, n: 6 }, { i: 11, n: 10 }]