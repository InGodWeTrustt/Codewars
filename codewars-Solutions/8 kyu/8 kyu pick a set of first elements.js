function first(arr, n = 1) {
    return arr.slice(0, n);
}


const arr = ['a', 'b', 'c', 'd', 'e'];
console.log(first([...arr]), ['a']);
console.log(first([...arr], 2), ['a', 'b']);