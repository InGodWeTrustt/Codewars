function alternate(n, firstValue, secondValue) {
    return Array.from({ length: n }, (_, i) => i % 2 == 0 ? firstValue : secondValue)
}


// Example
console.log(alternate(5, true, false)); // [true, false, true, false, true]
console.log(alternate(0, "lemons", "apples")); // []
console.log(alternate(2, 'test', 'test2')); //[ 'test', 'test2' ]