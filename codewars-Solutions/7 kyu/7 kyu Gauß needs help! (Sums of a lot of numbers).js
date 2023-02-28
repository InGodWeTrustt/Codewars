function f(n) {
    if (n <= 0 || !Number.isInteger(n)) return false;
    //sum of an arithmetic progression
    // s = ((a1+an)*n) / 2;
    return ((1 + n) * n) / 2
};

console.log(f(100), 5050);
console.log(f(300), 45150);
console.log(f(50000), 1250025000);
console.log(f('n'), false);
console.log(f(), false);
console.log(f(3.14), false);
console.log(f(0), false);
console.log(f(-10), false);