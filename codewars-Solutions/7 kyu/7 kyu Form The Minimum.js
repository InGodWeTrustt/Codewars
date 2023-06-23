function minValue(values) {
    const unique = Array.from(new Set(values));
    const sorted = unique.sort((a, b) => a - b);
    const result = parseInt(sorted.join(''));
    return result;
}

console.log(minValue([1, 3, 1]), 13);
console.log(minValue([4, 7, 5, 7]), 457);
console.log(minValue([4, 8, 1, 4]), 148);
console.log(minValue([5, 7, 9, 5, 7]), 579);