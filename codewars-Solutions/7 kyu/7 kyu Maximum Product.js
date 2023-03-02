function adjacentElementsProduct(array) {
    let maxProduct = -Infinity;

    array.reduce((acc, cur) => {
        maxProduct = Math.max(maxProduct, acc * cur);
        return cur;
    });

    return maxProduct;
}

console.log(adjacentElementsProduct([5, 8]), 40);
console.log(adjacentElementsProduct([1, 2, 3]), 6);
console.log(adjacentElementsProduct([1, 5, 10, 9]), 90);
console.log(adjacentElementsProduct([4, 12, 3, 1, 5]), 48);
console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6);