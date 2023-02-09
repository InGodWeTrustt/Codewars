function span(arr, pred) {
    const res = [[], []]
    let i = 0;

    while (i < arr.length) {
        const num = arr[i];
        if (pred(num) && !res[1].length) {
            res[0].push(num);
        } else {
            res[1].push(num);
        }
        i++;
    }

    return res;
}

// Example
function isEven(x) {
    return Math.abs(x) % 2 === 0;
}

let arr1 = [2,4,6,1,4,8];

console.log(span(arr1, isEven)); // [[2,4,6],[1,4,8]]