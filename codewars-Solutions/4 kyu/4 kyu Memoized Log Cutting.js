function cutLog(p, n) {
    const r = [0];

    for (let i = 1; i <= n; i++) {
        let q = -1;

        for (let j = 1; j <= i; j++) {
            q = Math.max(q, p[j] + r[i - j]);
        }

        r[i] = q;
    }

    return r[n];
}

var p = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, // 0X's
    30, 32, 35, 39, 43, 43, 45, 49, 50, 54, // 1X's
    57, 60, 65, 68, 70, 74, 80, 81, 84, 85, // 2X's
    87, 91, 95, 99, 101, 104, 107, 112, 115, 116, // 3X's
    119, 121, 125, 129, 131, 134, 135, 140, 143, 145, // 4X's
    151] // 50th element


console.log(cutLog(p, 0), 0);
console.log(cutLog(p, 1), 1);
console.log(cutLog(p, 5), 13);
console.log(cutLog(p, 8), 22);
console.log(cutLog(p, 10), 30);
console.log(cutLog(p, 22), 65);
console.log(cutLog(p, 23), 69);
console.log(cutLog(p, 37), 112);
console.log(cutLog(p, 41), 125);
console.log(cutLog(p, 50), 153);