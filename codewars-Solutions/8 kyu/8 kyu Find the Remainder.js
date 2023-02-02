function remainder(n, m) {
    const min = Math.min(n, m);
    return min !== 0 ? Math.max(n, m) % min : NaN;
}

console.log(remainder(17,5)); // 2
console.log(remainder(72, 13)); // 7
console.log(remainder(1, 0)); // NaN
console.log(remainder(0, 0)); // NaN