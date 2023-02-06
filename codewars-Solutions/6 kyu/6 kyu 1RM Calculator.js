function calculate1RM(w, r) {
    if (r == 1) return w;
    if (r == 0) return 0;

    const epley = w * (1 + r / 30);
    const mcG = (100 * w) / (101.3 - 2.67123 * r);
    const lomb = w * (r ** 0.1);

    const largest = Math.max(epley, mcG, lomb)
    const roundedLargestr = Math.round(largest);
    return roundedLargestr;
}

console.log(calculate1RM(135, 20)); // 282
console.log(calculate1RM(200, 8)); // 253
console.log(calculate1RM(270, 2)); // 289
console.log(calculate1RM(360, 1)); // 360
console.log(calculate1RM(400, 0)); // 0