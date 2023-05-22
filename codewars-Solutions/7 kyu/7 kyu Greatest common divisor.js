function mygcd(x, y) {

    while (y !== 0) {
        let remainder = x % y;
        x = y;
        y = remainder;
    }

    return x;
}

// Example test cases
console.log(mygcd(30, 12),  6);
console.log(mygcd(36, 12), 12);
console.log(mygcd( 8,  9),  1);
console.log(mygcd( 1,  1),  1);