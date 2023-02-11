function fib(num) {
    const fib = [0, 1];

    while (fib.length <= num) {
        fib[fib.length] = fib.at(-1) + fib.at(-2);
    }

    return fib.at(-1)
}

console.log(fib(249), 4.880197746793e+51);