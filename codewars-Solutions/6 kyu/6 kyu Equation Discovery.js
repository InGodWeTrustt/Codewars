function discover(f) {
    // Take two random points with coordinates x1 = 1; x2 = 10
    const x1 = 1;
    const x2 = 10;

    // calculate y coordinates
    const y1 = f(x1);
    const y2 = f(x2);

    if (y1 === y2) {
        return { type: 'constant', 'c': y1 };

    } else if (isLinearFn(y1, y2, f)) {
        const b = (y2 - y1) / (x2 - x1);
        const c = y1 - b * x1;
        return { type: 'linear', b, c }
    } else { // quadratic
        /**
         * By three points, we will compose 3 equations with 3 unknowns (a, b, c), 
         * substituting x and y into an equation of the form ax^2+b*x+c = y and solving by Cramer' method
         */

        //third Point
        const x3 = 15;
        const y3 = f(x3);

        const x = [x1, x2, x3];
        const matrix3x3 = Array.from({ length: 3 }, (_, i) => {
            return [x[i] ** 2, x[i], 1]
        });

        const y = [y1, y2, y3];

        const det = detMatrix(matrix3x3);
        const detA = detMatrix(changeElement(matrix3x3, 0, y))
        const detB = detMatrix(changeElement(matrix3x3, 1, y))
        const detC = detMatrix(changeElement(matrix3x3, 2, y))

        const a = detA / det;
        const b = detB / det;
        const c = detC / det;

        return { type: 'quadratic', a, b, c }
    }
}

function isLinearFn(y1, y2, f, x1 = 1, x2 = 10) {
    // y1 = b * x1 + c ;
    // y2 = b * x2 + c ;   b = (y2-y1)/(x2-x1); c = y1 - k*x1
    const b = (y2 - y1) / (x2 - x1)
    const c = y1 - b * x1;

    // assumed linear function
    const linFun = x => b * x + c;

    // f - function. which is passed to us as parameters, 
    // and linFun - function, which I built on two points.
    return f(5) === linFun(5)
}

function changeElement(arr, index, y) {
    const copy = JSON.parse(JSON.stringify(arr));
    copy.forEach((arr, i) => arr[index] = y[i]);
    return copy;
}

function detMatrix(m) {
    let d = 0;
    for (let i = 0; i < 3; i++) {
        let sub = m[i][0] * (m[(i + 1) % 3][1] * m[(i + 2) % 3][2] - m[(i + 1) % 3][2] * m[(i + 2) % 3][1]);
        d += sub;
    }
    return d;
}


// Example
let a = 0, b = 0, c = 0;
function f(x) {
    return a * x * x + b * x + c;
}

c = 3;
console.log(discover(f), {
    'type': 'constant',
    'c': 3
});

b = 10;
c = 0;
console.log(discover(f), {
    'type': 'linear',
    'b': 10,
    'c': 0
});

a = 5;
b = 3;
c = 1;
console.log(discover(f), {
    'type': 'quadratic',
    'a': 5,
    'b': 3,
    'c': 1
});