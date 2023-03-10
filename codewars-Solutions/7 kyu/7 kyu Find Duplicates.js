function duplicates(arr) {
  const counts = new Map();
  const duplicates = [];

  arr.forEach(elem => {
    counts.has(elem) ? counts.set(elem, counts.get(elem)+1) : counts.set(elem, 1);
    if (counts.get(elem) === 2) {
      duplicates.push(elem)
    }
  })
  
  return duplicates;
}


// Example
console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, '5'])); // 3
console.log(duplicates([0, 1, 2, 3, 4, 5])); // 0

