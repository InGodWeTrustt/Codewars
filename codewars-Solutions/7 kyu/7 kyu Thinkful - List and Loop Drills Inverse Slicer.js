function inverseSlice(items, a, b) {
    return items.filter((_, i) => i < a || i >= b)
}

console.log(inverseSlice([12, 14, 63, 72, 55, 24], 2, 4)); // [12, 14, 55, 24]
console.log(inverseSlice([12, 14, 63, 72, 55, 24], 0, 3)); // [72, 55, 24]