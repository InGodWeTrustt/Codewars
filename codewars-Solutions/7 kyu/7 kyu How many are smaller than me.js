function smaller(nums) {
    const copy = Array(nums.length).fill(0);

    for (let i = 0; i < nums.length; i++) {

        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                copy[i] += 1;
            }
        }
    }

    return copy;
}

// Example
console.log(smaller([5, 4, 3, 2, 1])); // [4, 3, 2, 1, 0]
console.log(smaller([1, 2, 3])); // [0, 0, 0]
console.log(smaller([1, 2, 0])); // [1, 1, 0]
console.log(smaller([1, 2, 1])); // [0, 1, 0]