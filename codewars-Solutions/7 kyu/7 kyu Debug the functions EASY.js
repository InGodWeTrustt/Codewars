function multi(arr) {
    return arr.reduce((acc, cur) => acc * cur, 1)
}

function add(arr) {
    return arr.reduce((acc, cur) => acc + cur, 0);
}

function reverse(str) {
    return str.split('').reverse().join('');
}

// Example
console.log(multi([5, 1, 5])); // 25
console.log(add([9, 8, 5])); // 22
console.log(reverse('12345')); // '54321'