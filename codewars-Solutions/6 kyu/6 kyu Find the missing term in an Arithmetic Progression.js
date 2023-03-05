var findMissing = function (list) {
    const sumAP = ((list.length + 1) * (list[0] + list[list.length - 1])) / 2;
    return sumAP - list.reduce((a, b) => a + b, 0)
}

console.log(findMissing([1, 3, 4]) === 2);