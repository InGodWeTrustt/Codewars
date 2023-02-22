function roots(a, b, c) {
    const D = b ** 2 - 4 * a * c;
    if (D == 0) {
        const x = - b / (2 * a);
        return +(x + x).toFixed(2);
    } else if (D > 0) {
        const x1 = (- b + Math.sqrt(D)) / (2 * a);
        const x2 = (- b - Math.sqrt(D)) / (2 * a);
        return +(x1 + x2).toFixed(2);
    } else return null;
}

// Example
console.log(roots(1,-35,-23),35);
console.log(roots(6,0,-24),0);
console.log(roots(-5,21,0),4.2);