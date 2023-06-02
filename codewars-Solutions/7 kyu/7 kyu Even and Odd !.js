function evenAndOdd(num) {
    let NE = "";
    let NO = "";
    num = String(num);

    for (let i = 0; i < num.length; i++) {
        if (+num[i] % 2 === 0) {
            NE += num[i];
        } else {
            NO += num[i];
        }
    }
    return [+NE, +NO];
}

console.log(evenAndOdd(126453)); // [264, 153]
console.log(evenAndOdd(3012)); // [2, 31]
console.log(evenAndOdd(4628)); // [4628, 0]