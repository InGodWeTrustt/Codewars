// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

function SeriesSum(n) {
    if (n === 0 || n === 1) {
        return n.toFixed(2)
    }
    let res = 0;
    let prev = 1;
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            res = 1
        } else {
            res += (1 / (prev + 3))
            prev += 3
        }
    }
    return res.toFixed(2)
}

console.log(SeriesSum(3)); // 1.39