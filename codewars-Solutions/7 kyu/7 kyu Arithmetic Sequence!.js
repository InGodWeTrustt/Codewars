var nthterm = function (first, n, c) {
    const seq = [first];

    while (seq.length <= n) {
        seq[seq.length] = seq.at(-1) + c;
    }

    return seq.at(-1) // or seq[seq.length-1]
}

// Example
console.log(nthterm(1, 2, 3), 7)
console.log(nthterm(2, 2, 2), 6)
console.log(nthterm(-50, 10, 20), 150)