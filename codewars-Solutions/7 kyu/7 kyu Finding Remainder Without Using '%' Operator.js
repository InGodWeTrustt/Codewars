const remainder = (D, d) => {
    if (D < d) {
        return D;
    }
    const divRes = Math.floor(D / d);
    return remainder(D - (divRes * d), d)
};


// Example
console.log(remainder(3, 2), 1);
console.log(remainder(19, 2), 1);
console.log(remainder(10, 2), 0);
console.log(remainder(34, 7), 6);
console.log(remainder(27, 5), 2);