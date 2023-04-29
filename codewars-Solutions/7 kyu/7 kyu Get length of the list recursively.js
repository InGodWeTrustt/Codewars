function lenR(x, count = 0) {
    if (!x.length) return count;
    return lenR(x.slice(1), ++count)
}

console.log(lenR([]), 0);
console.log(lenR([1]), 1);
console.log(lenR([1,2,3,5,6,8,9,10]), 8);