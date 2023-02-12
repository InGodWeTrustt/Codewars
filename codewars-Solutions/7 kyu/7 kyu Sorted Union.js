function uniteUnique(...args) {
    const concatArr = args.reduce((acc, cur) => acc.concat(cur), []);
    return [...new Set(concatArr)]
}

console.log(uniteUnique([1, 2], [3, 4]),[1, 2, 3, 4]);
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]),[1, 3, 2, 5, 4]);
console.log(uniteUnique([4, 3, 2, 2]),[4, 3, 2]);
console.log(uniteUnique([4, "a", 2], []),[4, "a", 2]);
console.log(uniteUnique([], [4, "a", 2]),[4, "a", 2]);
console.log(uniteUnique([], [4, "a", 2], []),[4, "a", 2]);
console.log(uniteUnique([]),[]);
console.log(uniteUnique([],[]),[]);
console.log(uniteUnique([],[1, 2]),[1, 2]);
console.log(uniteUnique([],[1, 2, 1, 2],[2, 1, 1, 2, 1]),[1, 2]);