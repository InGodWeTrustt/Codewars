/**
 1    / 1 = 1     // Works
12    / 2 = 6     // Works
123   / 3 = 41    // Works
1232  / 4 = 308   // Works
 */
function polydivisible(x) {
    if (x < 10) {
        return true;
    }
    let prefix = 0;
    let length = 0;
    for (let digit of x.toString()) {
        prefix = prefix * 10 + parseInt(digit);
        length++;
        if (prefix % length !== 0) {
            return false;
        }
    }
    return true;
}

// Тесты
console.log(polydivisible(1232) === true); // expected output: true
console.log(polydivisible(123220) === false); // expected output: true