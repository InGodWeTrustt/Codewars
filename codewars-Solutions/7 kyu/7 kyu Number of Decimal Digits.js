function digits(n) {
    return String(n).length
}

//Example
console.log(digits(0), 1);
console.log(digits(1), 1);
console.log(digits(10), 2);
console.log(digits(99), 2);
console.log(digits(100), 3);
console.log(digits(12345), 5);
console.log(digits(9876543210), 10);