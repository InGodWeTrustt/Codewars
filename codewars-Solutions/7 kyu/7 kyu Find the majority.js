function majority(arr) {
    if (!arr.length) return null;
    const cache = {};
    arr.forEach(word => cache[word] = (cache[word] || 0) + 1);
    const res = Object.entries(cache).sort((a, b) => a[1] - b[1])

    if (res.length > 1) {
        const max = res.at(-1);
        const prevMax = res.at(-2);
        return max[1] === prevMax[1] ? null : max[0]
    } else {
        return res[0][0]
    }
}


console.log(majority(["A", "B", "A"]), "A")
console.log(majority(["A", "B", "C"]), null)
console.log(majority(["A", "B", "B", "A"]), null)
console.log(majority(['A', 'A', 'A', 'A']), "A")
console.log(majority(['A',]), "A")
console.log(majority(['A', 'A', 'A', 'BBBBBBBB']), "A")
console.log(majority(["A", "B", "C", "C"]), "C")
console.log(majority([]), null)
console.log(majority(['B', 'C', '', '']), '', "Empty strings test!")