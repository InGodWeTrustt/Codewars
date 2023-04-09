function add(...args) {
    if (!args.length) return 0;
    let sum = 0;

    for (let i = 1; i <= args.length; i++) {
        sum += args[i - 1] / i
    }

    return Math.round(sum);
}

console.log(add(), 0);
console.log(add(100, 200, 300), 300);
console.log(add(2), 2);
console.log(add(4, -3, -2), 2);
