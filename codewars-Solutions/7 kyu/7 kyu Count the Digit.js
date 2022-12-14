function nbDig(n, d) {
    const res = []
    for (let i = 0; i <= n; i++) {
        res[i] = i ** 2
    }
    return res.join('').match(new RegExp(`${d}`,'g')).length
}



console.log(nbDig(11011, 2),  9481, "n = 11011, d = 2");