function calculateRatio(w, h) {
    if (w === 0 || h === 0) throw new Error('');
    const gcd = GCD(w, h);
    return `${w / gcd}:${h / gcd}`;
}

// greatest common divisor
function GCD(a, b) {
    if (b === 0) {
        return a;
    } else {
        return GCD(b, a % b)
    }
}


// Example
let results1 = calculateRatio(1024, 768);
console.log(results1, "4:3");

results1 = calculateRatio(1920, 1080);
console.log(results1, "16:9"); 