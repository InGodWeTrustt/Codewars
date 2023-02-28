function maxDiff(list) {
    if (list.length < 2) return 0;
    list.sort((a, b) => a - b);
    return list.at(-1) - list[0];
}

console.log(maxDiff([0, 1, 2, 3, 4, 5, 6]), 6);
console.log(maxDiff([-0, 1, 2, -3, 4, 5, -6]), 11);
console.log(maxDiff([0, 1, 2, 3, 4, 5, 16]), 16);
console.log(maxDiff([16]), 0);
console.log(maxDiff([]), 0);