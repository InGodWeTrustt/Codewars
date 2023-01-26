Array.prototype.numberOfOccurrences = function(element) {
    const cache = {};
    this.forEach(number => cache[number] = (cache[number] || 0) + 1);
    return cache[element] || 0;
}



var arr = [0, 1, 2, 2, 3];
console.log(arr.numberOfOccurrences(0) === 1);
console.log(arr.numberOfOccurrences(4) === 0);
console.log(arr.numberOfOccurrences(2) === 2);
console.log(arr.numberOfOccurrences("a") === 0);