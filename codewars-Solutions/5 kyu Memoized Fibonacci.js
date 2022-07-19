
const fibonacci = (function () {
    const cache = new Map()
    return n => {
        if (n === 0 || n === 1) return n;
        if (cache.has(n)) {
            return cache.get(n)
        } else {
            cache.set(n, fibonacci(n - 1) + fibonacci(n - 2))
        }
        return cache.get(n)
    }
})();
