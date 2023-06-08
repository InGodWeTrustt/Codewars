function diamond(n) {
    if (n % 2 === 0 || n < 1) {
        return null;
    }

    let diamondStr = '';
    const middleIndex = Math.floor(n / 2);

    for (let i = 0; i < n; i++) {
        const spaces = Math.abs(middleIndex - i);
        const asterisks = n - 2 * spaces;
        diamondStr += ' '.repeat(spaces) + '*'.repeat(asterisks) + '\n';
    }

    return diamondStr;
}

console.log(diamond(1) === "*\n"); // Output: true
console.log(diamond(3) === " *\n***\n *\n"); // Output: true
console.log(diamond(5) === "  *\n ***\n*****\n ***\n  *\n"); // Output: true