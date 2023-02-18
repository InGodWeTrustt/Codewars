function matrix(arr) {
    const copy = [...arr];
    copy.forEach((_, i) => copy[i][i] = (copy[i][i] < 0 ? 0 : 1))
    return copy;
}

// Example
console.log(matrix([[-1, 4, -5, -9, 3], [6, -4, -7, 4, -5], [3, 5, 4, -9, -1], [1, 5, -7, -8, -9], [-3, 2, 1, -5, 6]])) // [[0, 4, -5, -9, 3], [6, 0, -7, 4, -5], [3, 5, 1, -9, -1], [1, 5, -7, 0, -9], [-3, 2, 1, -5, 1]]