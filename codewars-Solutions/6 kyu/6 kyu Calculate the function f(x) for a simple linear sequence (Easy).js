function getFunction(sequence) {
    const points = [];
    for (let i = 0; i < sequence.length; i++) {
        points.push([i, sequence[i]])
    }

    const linEq = getLinearEquation(points[0], points[1]);

    if (points.slice(2).every(([x, y]) => linEq(x) === y)) { // linear function
        const [x0, y0] = points[0];
        const [x1, y1] = points[1];
        const k = (y1 - y0) / (x1 - x0);
        const b = y1 - k * x1;

        if (k === 0) {
            return `f(x) = ${getStrForB(b)}`.replace(' + ', '')
        } else {
            return `f(x) = ${getStrForK(k)}${getStrForB(b)}`;
        }
    } else {
        return 'Non-linear sequence';
    }
}

function getStrForK(k) {
    let res = '';
    if (k > 0) {
        if (k === 1) return 'x';
        res += `${k}x`
    } else if (k < 0) {
        if (k === -1) return '-x';
        res += `${k}x`
    }
    return res;
}

function getStrForB(b) {
    let res = '';
    if (b > 0) {
        res += ` + ${b}`
    } else if (b < 0) {
        res += ` - ${Math.abs(b)}`
    }
    return res;
}

function getLinearEquation(pointA, pointB) {
    const [x0, y0] = pointA;
    const [x1, y1] = pointB;
    const k = (y1 - y0) / (x1 - x0);
    const b = y1 - k * x1;
    return x => k * x + b
}


// Example
console.log(getFunction([0, 1, 2, 3, 4]));  // f(x) = x
console.log(getFunction([0, 3, 6, 9, 12])); // f(x) = 3x
console.log(getFunction([1, 4, 7, 10, 13])); //  f(x) = 3x + 1