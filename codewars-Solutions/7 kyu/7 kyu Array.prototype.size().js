Array.prototype.size = function () {
    let count = 0;
    this.forEach(elem => count++);
    return count;
};

console.log([].size()); // 0
console.log([1,2,3].size()); // 3