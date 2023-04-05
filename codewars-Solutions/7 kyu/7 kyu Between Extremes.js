function betweenExtremes(numbers) {
    numbers.sort((a, b) => a - b); // sort in ascending order
    const min = numbers[0]; // first element
    const max = numbers[numbers.length - 1]; // last element
    return max - min;
}

console.log(betweenExtremes([21, 34, 54, 43, 26, 12]) === 42);
console.log(betweenExtremes([-1, -41, -77, -100]) === 99);