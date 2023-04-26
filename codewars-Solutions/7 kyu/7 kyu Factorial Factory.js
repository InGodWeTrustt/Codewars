function factorial(n, cache = {}) {
    if (cache[n]) {
        return cache[n]
    }

    if (n < 0) {
        return null;
    } else if (n === 0 || n === 1) {
        return 1;
    }

    cache[n] = n * factorial(n - 1, cache);
    return cache[n];
}


console.log(factorial(2), 2)
console.log(factorial(5), 120)
console.log(factorial(-1), null)