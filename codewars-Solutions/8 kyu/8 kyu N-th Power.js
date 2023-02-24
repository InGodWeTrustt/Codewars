function index(array, n) {
    return array[n] ? array[n] ** n : -1;
}

// Example
console.log(index([1, 2, 3, 4], 2) === 9);
console.log(index([1, 3, 10, 100], 3) === 1000000);
console.log(index([1, 2], 3) === -1);