function reverseIt(data) {
    if (typeof data === 'string') {
        return data.split('').reverse().join('')
    } else if (typeof data === 'number') {
        return +String(data).split('').reverse().join('')
    } else {
        return data
    }
}

// Example
console.log(reverseIt('Hello') === "olleH");
console.log(reverseIt(314159) === 951413);
console.log(reverseIt("314159") === "951413");
console.log(reverseIt([])); // []