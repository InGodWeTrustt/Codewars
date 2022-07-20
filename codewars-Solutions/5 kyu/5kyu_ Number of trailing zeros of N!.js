function zeros(n) {
    let res = 0;
    while (n > 0) {
        res += Math.floor(n / 5)
        n /= 5;
    }
    return res
}

console.log(zeros(30))

