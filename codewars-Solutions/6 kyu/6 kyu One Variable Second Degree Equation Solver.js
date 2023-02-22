function secDegSolver(a, b, c) {
    if (a === 0 && b === 0 && c === 0) {
        return 'The equation is indeterminate'

    } else if (a === 0 && b === 0 && c !== 0) {
        return 'Impossible situation. Wrong entries'

    } else if (a === 0 && b !== 0) { // linear
        if (c === 0) return '0.0';
        // bx + c = 0 -> bx = -c -> x = - c / b;
        return `It is a first degree equation. Solution: ${parseFloat((- c / b).toFixed(10))}`;

    } else { // quadratic ax^2+bx+c = 0
        return solvingQuadraticEq(a, b, c)
    }
}

function solvingQuadraticEq(a, b, c) {
    const D = Math.pow(b, 2) - 4 * a * c;
    if (D == 0) {
        const x = - b / (2 * a);
        const xRound = parseFloat(x.toFixed(10))
        return `It has one double solution: ${xRound}`;

    } else if (D > 0) {
        const x1 = (- b + Math.sqrt(D)) / (2 * a);
        const x2 = (- b - Math.sqrt(D)) / (2 * a);
        const x1Round = parseFloat(x1.toFixed(10))
        const x2Round = parseFloat(x2.toFixed(10))
        return `Two solutions: ${[x1Round, x2Round].sort().join(', ')}`;

    } else return 'There are no real solutions';
}


// Example
console.log(secDegSolver(-1,-8,-5)); // Two solutions: -0.6833752096, -7.3166247904
console.log(secDegSolver(0, 2, -4)); // It is a first degree equation. Solution: 2
console.log(secDegSolver(10, 2, -4)); // Two solutions: -0.7403124237, 0.5403124237
console.log(secDegSolver(1.5, 2, 4)) // There are no real solutions
console.log(secDegSolver(1, -2, 1)); // It has one double solution: 1
console.log(secDegSolver(0, 0, 0)); // The equation is indeterminate
console.log(secDegSolver(0, 0, -2)); // Impossible situation. Wrong entries