function quadrant(x, y) {
    if (x > 0) {
        return y > 0 ? 1 : 4;
    } else {
        return y > 0 ? 2 : 3;
    }
}

// Примеры тестов (example test)
console.log(quadrant(1,4)); // 1
console.log(quadrant(1,-4)); // 4
console.log(quadrant(-1,4)); // 2
console.log(quadrant(-1, -4)); // 3