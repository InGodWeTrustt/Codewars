function twoHighest(arr) {
    const unique = [...new Set(arr)];
    return unique.sort((a, b) => b - a).slice(0, 2);
}

console.log(twoHighest([]), [])
console.log(twoHighest([15]), [15])
console.log(twoHighest([15, 20, 20, 17]), [20, 17])