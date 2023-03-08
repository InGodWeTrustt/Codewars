function zeroFill(number, size) {
    number = Math.abs(~~number); // whole positive integer
    number = String(number).padStart(size, '0')
    return number;
}

// Example
console.log(zeroFill(11, 5), "00011");
console.log(zeroFill(11, 11), "00000000011");
console.log(zeroFill(-32, 5), "00032");
console.log(zeroFill(0, 3), "000");