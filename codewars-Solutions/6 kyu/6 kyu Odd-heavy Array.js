function isOddHeavy(n) {
    const odds = n.filter(num => num % 2 !== 0);
    const evens = n.filter(num => num % 2 === 0);
    return odds.length > 0 ? odds.every(odd => odd > Math.max(...evens)) : false;
}

console.log(isOddHeavy([0, 2, 19, 4, 4]), true);
console.log(isOddHeavy([1, -2, -1, 2]), false);