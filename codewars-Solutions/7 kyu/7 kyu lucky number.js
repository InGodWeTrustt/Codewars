function isLucky(n) {
    const sum = [...String(n)].reduce((acc, cur) => acc + +cur, 0);
    return sum === 0 || sum % 9 === 0;
}


// Example
console.log(isLucky(1892376), true);
console.log(isLucky(189237), false);
console.log(isLucky(1098), true);
console.log(isLucky(22869), true);
console.log(isLucky(0), true);