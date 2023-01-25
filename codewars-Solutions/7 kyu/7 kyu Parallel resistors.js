// total = 1 / (1/r1 + 1/r2 + .. + 1/rn)

function resistor_parallel(...args) {
    return 1 / (args.reduce((a, b) => a + (1 / b), 0))
}


console.log(resistor_parallel(20, 20), 10.0)
console.log(resistor_parallel(20, 20, 40), 8.0)