const squares = (x, n) => {
    if (n < 1) return [];

    const res = [x];

    while (res.length < n) {
        const prevNum = res[res.length - 1];
        res.push(prevNum ** 2);
    }

    return res;
}

// Example
console.log(squares(2, 5)); //  [2, 4, 16, 256, 65536]
console.log(squares(3, 3)); //  [3, 9, 81]
console.log(squares(5, 3)); //  [5, 25, 625]
console.log(squares(10, 4)); //  [10, 100, 10000, 100000000]
console.log(squares(2, 0)); //  []
console.log(squares(2, -5)); //  []