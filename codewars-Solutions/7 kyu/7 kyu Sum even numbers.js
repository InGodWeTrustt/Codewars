function sumEvenNumbers(input) {
    const evenArr = input.filter(num => num % 2 == 0);
    const sum = evenArr.reduce((prev, cur) => prev + cur, 0)
    return sum;
}


console.log(sumEvenNumbers([1337, 374, 849, 22.5, 19, 16, 0, 0, 16, 32]));  // 438