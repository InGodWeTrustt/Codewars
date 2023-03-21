function sumNoDuplicates(numList) {
    let sum = 0;

    for (let i = 0; i < numList.length; i++) {
        const element = numList[i];
        if (numList.indexOf(element) === numList.lastIndexOf(element)) {
            sum += element;
        }
    }

    return sum;
}

console.log(sumNoDuplicates([5, 6, 10, 3, 10, 10, 6, 7, 0, 9, 1, 1, 6, 3, 1]) === 21);
console.log(sumNoDuplicates([0, 10, 8, 9, 7, 3, 3, 9, 3, 6, 0]) === 31);