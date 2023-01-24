function nthFibo(n) {
    const fib = [0, 1];

    while (n > fib.length) {
        fib[fib.length] = fib[fib.length - 1] + fib[fib.length - 2];
    }

    return fib[n - 1];
}

console.log(nthFibo(1)); //  0, "1-st Fibo"
console.log(nthFibo(2)); //  1, "2-nd Fibo"
console.log(nthFibo(3)); //  1, "3-rd Fibo"
console.log(nthFibo(4)); //  2, "4-th Fibo"