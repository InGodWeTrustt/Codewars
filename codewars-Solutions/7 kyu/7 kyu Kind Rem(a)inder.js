function kira(a, b, c) {
    let max = 0;
    a.forEach((elem, i) => max = Math.max(max, elem % b[i]));
    return max % 2 === 0 ? c.toLowerCase() : c.toUpperCase();
}

console.log(kira([16, 16], [10, 5], 'Doctor')); // doctor
console.log(kira([13, 16], [20, 16], 'Doctor')); // DOCTOR