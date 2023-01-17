function between(a, b) {
    const res = [];
    for (let i = a; i <= b; i++) {
        res.push(i);
    }
    return res;
}

console.log(between(1,5)); // [ 1, 2, 3, 4, 5 ]