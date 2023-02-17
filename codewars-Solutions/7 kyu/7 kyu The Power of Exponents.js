function power(base, exponent) {
    let res = 1;
    for (let i = 0; i < Math.abs(exponent); i++) {
        res *= base;
    }

    /** Example, if exponent negative
         -2    1
        4   = ---
                2
               4
    **/
    return exponent < 0 ? (1 / res) : res;
}

// Example
console.log(power(2, 3), 8);
console.log(power(10, 0), 1);
console.log(power(123, 1), 123);
console.log(power(-5, 3), -125);
console.log(power(-4, 4), 256);
console.log(power(4, -2), 0.0625);