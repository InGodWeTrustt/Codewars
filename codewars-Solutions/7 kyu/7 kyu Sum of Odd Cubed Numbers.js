function cubeOdd(arr) {
    if (!arr.every(num => typeof num === 'number')) return;
    const cub = arr.map(num => num ** 3);
    return cub.filter(num => num % 2 !== 0).reduce((a, b) => a + b, 0)
}

console.log(cubeOdd([1, 2, 3, 4]) === 28);
console.log(cubeOdd([-3, -2, 2, 3]) === 0);
console.log(cubeOdd(["a", 12, 9, "z", 42]) === undefined);