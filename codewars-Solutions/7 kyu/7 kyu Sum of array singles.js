function repeats(arr) {
    const cache = {};
    arr.forEach(num => cache[num] = (cache[num] || 0) + 1);
    return Object.entries(cache).filter(([key, value]) => value < 2).reduce((acc, cur) => acc + +cur[0], 0);
};

console.log(repeats([4,5,7,5,4,8]),15);
console.log(repeats([9, 10, 19, 13, 19, 13]),19);
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]),12);
console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]),22);
console.log(repeats([5, 10, 19, 13, 10, 13]),24);