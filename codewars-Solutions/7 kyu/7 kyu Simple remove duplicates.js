function solve(nums) {
    let seen = new Set();
    for (let i = nums.length - 1; i >= 0; i--) {
        if (seen.has(nums[i])) {
            nums.splice(i, 1);
        } else {
            seen.add(nums[i]);
        }
    }
    return nums;
}

console.log(solve([3, 4, 4, 3, 6, 3]), [4, 6, 3]);
console.log(solve([1, 2, 1, 2, 1, 2, 3]), [1, 2, 3]);
console.log(solve([1, 2, 3, 4]), [1, 2, 3, 4]);
console.log(solve([1, 1, 4, 5, 1, 2, 1]), [4, 5, 2, 1]);
console.log(solve([1, 2, 1, 2, 1, 1, 3]), [2, 1, 3]);