// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num, count = 0) {
    if(String(num).length < 2) return count;
    const res = [...String(num)].reduce((prev, cur) => prev*cur)
    count++;
    return persistence(res, count)
}

console.log(persistence(39))
console.log(persistence(999))
console.log(persistence(4))