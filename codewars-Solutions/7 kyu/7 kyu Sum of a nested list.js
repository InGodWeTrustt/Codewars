const sumNested = arr => {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            sum += sumNested(arr[i]);
        } else {
            sum += arr[i];
        }
    }

    return sum;
};

console.log(sumNested([1]), 1);
console.log(sumNested([1, 2, 3, 4]), 10);
console.log(sumNested([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 55);
console.log(sumNested([]), 0);
console.log(sumNested([[1], []]), 1);
console.log(sumNested([[1, 2, 3, 4]]), 10);
console.log(sumNested([1, [1], [[1]], [[[1]]]]), 4);
console.log(sumNested([1, [1], [1, [1]], [1, [1], [1, [1]]]]), 8);