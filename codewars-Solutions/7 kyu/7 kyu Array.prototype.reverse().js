Array.prototype.reverse = function() {
    [...this].forEach((_, i, arr) => this[i] = arr.at(-1-i));
    return this;
  }

console.log([1,2,3,4].reverse()); // [4,3,2,1]