function getMinMax(arr) {
    return arr.length == 1 ? [arr[0], arr[0]] : [Math.min(...arr), Math.max(...arr)];
};

// Example
console.log(getMinMax([1]),[1,1]);
console.log(getMinMax([1,2]),[1,2]);
console.log(getMinMax([2,1]),[1,2]);