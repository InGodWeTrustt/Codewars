function isPowerOfTwo(n) {
    return Number.isInteger(Math.log2(n));
}


// Example
console.log(isPowerOfTwo(1024)); // true
console.log(isPowerOfTwo(333)); // false