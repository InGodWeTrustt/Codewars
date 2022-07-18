function highAndLow(numbers) {
    const split = numbers.split(' ')
    const min = Math.min(...split)
    const max = Math.max(...split)
    return max + ' ' + min
}


console.log(highAndLow("1 2 3")); // "3 1"