function facRecursion(value) {
    if (value < 0) {
        return 0;
    }
    if (value == 1 || value == 0) {
        return 1;
    }
    return value * facRecursion(value - 1);
}

console.log(facRecursion(0), 1, "Should return 1");
console.log(facRecursion(1), 1, "Should return 1");
console.log(facRecursion(2), 2, "Should return 2");
console.log(facRecursion(3), 6, "Should return 6");
console.log(facRecursion(4), 24, "Should return 24");
console.log(facRecursion(5), 120, "Should return 120");
console.log(facRecursion(6), 720, "Should return 720");
console.log(facRecursion(-1), 0, "Should return 0");