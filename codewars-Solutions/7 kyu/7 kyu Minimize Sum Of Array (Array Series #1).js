function minSum(arr) {
    let res = 0;

    // sort by ascending
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length / 2; i++) {
        // first element * last element, 
        // second element * penultimate, until you reach the middle (arr.length / 2)
        res += arr[i] * arr.at(-1 - i);
    }

    return res;
}

console.log(minSum([5, 4, 2, 3]) === 22);
console.log(minSum([12, 6, 10, 26, 3, 24]) === 342);
console.log(minSum([9, 2, 8, 7, 5, 4, 0, 6]) === 74);