const avg = (...args) => args.reduce((a, b) => a + b, 0) / args.length;

function avgArray(arr) {
    const res = [];

    for (let i = 0; i < arr[0].length; i++) {
        const tmp = [];
        for (let j = 0; j < arr.length; j++) {
            tmp.push(arr[j][i]);
        }
        res.push(avg(...tmp));
    }

    return res;
}

console.log(avgArray([[1, 2, 3, 4], [5, 6, 7, 8]]), [3, 4, 5, 6]);
console.log(avgArray([[2, 3, 9, 10, 7], [12, 6, 89, 45, 3], [9, 12, 56, 10, 34], [67, 23, 1, 88, 34]]), [22.5, 11, 38.75, 38.25, 19.5]);
console.log(avgArray([[1.2, 8.521, 0.4, 3.14, 1.9], [2, 4.5, 3.75, 0.987, 1.0]]), [1.6, 6.5105, 2.075, 2.0635, 1.45]);