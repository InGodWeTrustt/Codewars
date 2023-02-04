function sumOfDifferences(arr) {
    arr.sort((a, b) => b - a);
    let dif = 0;

    if (arr.length > 1) {
        arr.reduce((a, b) => {
            dif += (a - b);
            return b;
        })
    }

    return dif;
}


console.log(sumOfDifferences([1, 2, 10]), 9);
console.log(sumOfDifferences([-3, -2, -1]), 2);