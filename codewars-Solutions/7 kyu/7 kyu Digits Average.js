/**
             digitsAverage(246)  ==>  4

            original: 2   4   6
                       \ / \ /
            1st iter:   3   5
                         \ /
            2nd iter:     4
 */
function digitsAverage(input) {
    const inputStr = String(input);
    if (inputStr.length == 1) return +input;
    const res = [];

    for (let i = 0; i < inputStr.length - 1; i++) {
        const average = Math.ceil((+inputStr[i] + +inputStr[i+1]) / 2)
        res.push(average)
    }

    return digitsAverage(res.join(''));
}

// Примеры тестов
console.log(digitsAverage(246) === 4);
console.log(digitsAverage(89) === 9);
console.log(digitsAverage(2) === 2);
console.log(digitsAverage(245) === 4);
console.log(digitsAverage(345) === 5);
console.log(digitsAverage(346) === 5);