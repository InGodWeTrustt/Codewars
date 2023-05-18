const printArray = a => a.join(',');

// Example test cases
let data = [2, 4, 5, 2];;
console.log(printArray(data)); // 2,4,5,2

data = [2.0, 4.2, 5.1, 2.2];
console.log(printArray(data)); // 2,4.2,5.1,2.2
