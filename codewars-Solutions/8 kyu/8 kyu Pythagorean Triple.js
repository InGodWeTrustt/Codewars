function isPythagoreanTriple(integers) {
    const [a, b, c] = integers.sort((a, b) => a - b);
    const square = num => num ** 2;
    return square(a) + square(b) === square(c)
}


console.log(isPythagoreanTriple([3, 4, 5]), true);
console.log(isPythagoreanTriple([3, 5, 9]), false);
