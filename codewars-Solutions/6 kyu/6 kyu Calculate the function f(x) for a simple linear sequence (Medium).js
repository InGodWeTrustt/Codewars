function getFunction(sequence) {
    const [x1, y1] = [0, sequence[0]]; // A(x1 = 0, y1)
    const [x2, y2] = [1, sequence[1]]; // B(x2 = 1, y2)
    const k = (y2 - y1) / (x2 - x1);
    const b = y1 - k * x1;

    for (let x = 2; x < sequence.length; x++) {
        if (k * x + b !== sequence[x]) {
            return 'Non-linear sequence';
        }
    }
    
    return x => k * x + b;
}

// Example
console.log(getFunction([0, 1, 2, 3, 4])(5), 5);
console.log(getFunction([0, 3, 6, 9, 12])(10), 30);
console.log(getFunction([1, 4, 7, 10, 13])(20), 61);