function dominator(arr) {
    let counts = {};
    for (let num of arr) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
        if (counts[num] > arr.length / 2) {
            return num;
        }
    }
    return -1;
}

console.log(dominator([3, 4, 3, 2, 3, 1, 3, 3]));  // Output: 3
console.log(dominator([1, 2, 3, 4, 5]));  // Output: -1
console.log(dominator([1, 1, 1, 2, 2, 2]));  // Output: -1
console.log(dominator([1, 1, 1, 2, 2, 2, 2]));  // Output: 2