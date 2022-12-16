const maxSequence = arr => {
    let curSum = 0;
    let maxSum = -Math.pow(2, 53);

    arr.forEach(element => {
        curSum = Math.max(element, curSum + element)
        maxSum = Math.max(maxSum, curSum)
    });

    return maxSum < 0 ? 0 : maxSum
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6)
console.log(maxSequence([]), 0)