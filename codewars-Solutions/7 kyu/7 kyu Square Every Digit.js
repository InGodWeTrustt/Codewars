function squareDigits(num) {
    return +[...String(num)].map(char => char ** 2).join('')
}

console.log(squareDigits(3212)); //9414