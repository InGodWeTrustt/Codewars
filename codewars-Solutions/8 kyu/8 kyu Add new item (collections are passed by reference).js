function addExtra(listOfNumbers) {
    const copy = [...listOfNumbers]
    const lastElement = copy[copy.length - 1] || 0;
    copy.push(lastElement + 1);
    return copy;
}

console.log(addExtra([1,2,3]).length, 4)
console.log(addExtra([1,2]).length, 3)
console.log(addExtra([]).length, 1)