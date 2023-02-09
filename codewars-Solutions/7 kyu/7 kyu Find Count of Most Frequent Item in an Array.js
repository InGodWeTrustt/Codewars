function mostFrequentItemCount(arr) {
    if (!arr.length) return 0;
    const cache = {};
    arr.forEach(num => cache[num] = (cache[num] || 0) + 1);
    return Object.entries(cache).sort((a, b) => b[1] - a[1])[0][1];
}


// Example
console.log(mostFrequentItemCount([3, -1, -1]), 2);
console.log(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]), 5);


