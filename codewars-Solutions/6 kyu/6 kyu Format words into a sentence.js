function formatWords(words) {

    if (words === null || !words.length || (words.length === 1 && !words[0].length)) return '';
    const filtered = words.filter(word => word.length > 0);

    if (filtered.length < 2) {
        return filtered[0];
    } else if (filtered.length < 3) {
        return filtered.join(' and ')
    }

    return filtered.slice(0, -1).join(', ') + ' and ' + filtered.at(-1);
}

console.log(formatWords(['one', 'two', 'three', 'four']), 'one, two, three and four');
console.log(formatWords(['one']), 'one');
console.log(formatWords(['one', '', 'three']), 'one and three');
console.log(formatWords(['', '', 'three']), 'three');
console.log(formatWords(['one', 'two', '']), 'one and two');
console.log(formatWords([]), '');
console.log(formatWords(null), '');
console.log(formatWords(['']), '');