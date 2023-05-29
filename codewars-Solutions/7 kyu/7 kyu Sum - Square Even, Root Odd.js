const sumSquareEvenRootOdd = ns => {
    let modNums = [];
    ns.forEach(num => num % 2 == 0 ? modNums.push(num ** 2) : modNums.push(num ** (1 / 2)));
    let sum = modNums.reduce((a, b) => a + b, 0);
    return +sum.toFixed(2)
};


console.log(sumSquareEvenRootOdd([4, 5, 7, 8, 1, 2, 3, 0])); // 91.61
console.log(sumSquareEvenRootOdd([1, 14, 9, 8, 17, 21])); // 272.71