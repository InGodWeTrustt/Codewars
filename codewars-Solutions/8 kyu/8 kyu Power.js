function numberToPower(number, power) {
    if (power === 0) return 1;
    if (power === 1) return number;
    
    // returns the number raised to the power using a recursive call.
    return number * numberToPower(number, power - 1)
}

// Example
console.log(numberToPower(4, 2), 16);
console.log(numberToPower(10, 4), 10000);
console.log(numberToPower(10, 0), 1);