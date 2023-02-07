function sumOfMinimums(arr) {
    let res = 0;
    arr.forEach(elem => res += Math.min(...elem));
    return res;
}


// Example
const arr = [ [ 1, 2, 3, 4, 5 ], [ 5, 6, 7, 8, 9 ], [ 20, 21, 34, 56, 100 ]];
const arr2 = [ [4,6,9], [1,3,15]];

// 1 + 5 + 20 = 26
console.log(sumOfMinimums(arr)); 26

// min in [4,6,9] = 4; min in [1,3,15] = 1; 4 + 1 = 5
console.log(sumOfMinimums(arr2)); 5