function maxMin(arr1, arr2) {
    const tmp = [];

    for (let i = 0; i < arr1.length; i++) {
        const diff = Math.abs(arr1[i] - arr2[i]);
        tmp.push(diff);
    }
    const maxValue = Math.max(...tmp);
    const minValue = Math.min(...tmp);
    return [maxValue, minValue];
}

// Test case 1: Test with arrays [1,3,5] and [9,8,7]
console.log("Test case 1:");
Test.assertSimilar(maxMin([1, 3, 5], [9, 8, 7]), [8, 2]); // Expected output: [8,2]

// Test case 2: Test with arrays [1,10,100,1000] and [0,0,0,0]
console.log("Test case 2:");
Test.assertSimilar(maxMin([1, 10, 100, 1000], [0, 0, 0, 0]), [1000, 1]); // Expected output: [1000,1]

// Test case 3: Test with arrays [10,20,30,40] and [111,11,1,-111]
console.log("Test case 3:");
Test.assertSimilar(maxMin([10, 20, 30, 40], [111, 11, 1, -111]), [151, 9]); 