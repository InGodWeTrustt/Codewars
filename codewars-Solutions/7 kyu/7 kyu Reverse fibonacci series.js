function reverseFibo(n) {
    const fib = [0, 1];

    while (n > fib.length) {
        fib[fib.length] = fib[fib.length - 1] + fib[fib.length - 2];
    }

    return fib.slice(0, n).reverse().join('');
}

console.log(reverseFibo(3));
console.log(reverseFibo(10));