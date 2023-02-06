function isOrthogonal(u, v) {
    return u.reduce((acc, cur, i) => acc + cur * v[i], 0) == 0
}

console.log(isOrthogonal([1, 2], [2, 1]), false);
console.log(isOrthogonal([1, -2], [2, 1]), true);
console.log(isOrthogonal([7, 8], [7, -6]), false);
console.log(isOrthogonal([-13, -26], [-8, 4]), true);