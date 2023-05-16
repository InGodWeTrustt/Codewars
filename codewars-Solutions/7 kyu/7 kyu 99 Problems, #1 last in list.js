// Return the last item in the list, or if the list is empty, then return null
const last = xs => xs.length ? xs[xs.length - 1] : null;

// Example test cases
console.log(last([1, 2, 3]), 3, "last([1,2,3]) == 3");
console.log(last([]), null, "last( [] ) == null");