function mxdiflg(a1, a2) {
    if (!a1.length || !a2.length) return -1;

    a1 = a1.map(str => str.length).sort((a, b) => a - b);
    a2 = a2.map(str => str.length).sort((a, b) => a - b);

    const [min1, max1] = [a1[0], a1.at(-1)];
    const [min2, max2] = [a2[0], a2.at(-1)];

    return Math.max(Math.abs(min1 - max2), Math.abs(min2 - max1))
}

// Example
var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
console.log(mxdiflg(s1, s2) === 13);