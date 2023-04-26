function sumFactorial(arr) {
    let result = 0;
    arr.forEach(number => result += memoFact(number));
    return result;
}

function memoFact(n, cache = {}) {
    if (cache[n]) {
        return cache[n]
    }

    if (n === 0 || n === 1) {
        return 1
    }

    cache[n] = n * memoFact(n - 1, cache);
    return cache[n]
}


// Example
console.log(sumFactorial([4,6]), 744);
console.log(sumFactorial([5,4,1]), 145);