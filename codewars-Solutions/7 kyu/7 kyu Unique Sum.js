const uniqueSum = lst => lst.length ? [...new Set(lst)].reduce((a, b) => a + b , 0) : null;

// Example test cases
console.log(uniqueSum([1,2,3]), 6)
console.log(uniqueSum([1,3,8,1,8]), 12)
console.log(uniqueSum([-1,-1,5,2,-7]), -1)
console.log(uniqueSum([]), null)