function i(word) {
    const firstChar = word[0]
    if (!/i/i.test(firstChar)
        && !/[a-z]/.test(firstChar)
        && (word.match(/[aeiou]/gi)?.length || 0) < (word.match(/[^aeiou]/gi)?.length || 0)
    ) {
        return `i${word}`
    }
    return 'Invalid word'
}

// Example
console.log(i('Phone'), 'iPhone');
console.log(i('World'), 'iWorld');
console.log(i('Human'), 'iHuman');
console.log(i('Programmer'), 'iProgrammer');
console.log(i(''), 'Invalid word');
console.log(i('Inspire'), 'Invalid word');
console.log(i('East'), 'Invalid word');
console.log(i('Peace'), 'Invalid word');
console.log(i('road'), 'Invalid word');