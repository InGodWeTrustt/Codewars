function findNb(m) {
    let n = 1;
    let sum = n;

    while (sum < m) {
        n++;
        sum += Math.pow(n, 3);
    }

    return sum === m ? n : -1;
}

console.log(findNb(135440716410000), 4824)
console.log(findNb(40539911473216), 3568)