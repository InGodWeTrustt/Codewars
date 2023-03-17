function deepCount(a) {
    let count = 0;

    for (let i = 0; i < a.length; i++) {
        count++;
        if (Array.isArray(a[i])) {
            count += deepCount(a[i]);
        }
    }

    return count;
}

// Example
console.log(deepCount([]), 0, "Expected 0");
console.log(deepCount([1, 2, 3]), 3, "Expected 3");
console.log(deepCount(["x", "y", ["z"]]), 4, "Expected 4");
console.log(deepCount([1, 2, [3, 4, [5]]]), 7, "Expected 7");
console.log(deepCount([[[[[[[[[]]]]]]]]]), 8, "Expected 8");