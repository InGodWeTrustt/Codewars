function consecutive(arr, a, b) {
    return Math.abs(arr.indexOf(a) - arr.indexOf(b)) === 1 ? true : false;
}

console.log(consecutive([1, 3, 5, 7], 3, 7), false);
console.log(consecutive([1, 3, 5, 7], 3, 1), true);
console.log(consecutive([1, 6, 9, -3, 4, -78, 0], -3, 4), true);