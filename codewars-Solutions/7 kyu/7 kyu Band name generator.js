function bandNameGenerator(str) {
    const firstCharUpper = str[0].toUpperCase();
    const remainingOfStr = str.slice(1);

    if (str[0] === str.at(-1)) {
        return `${firstCharUpper}${remainingOfStr.repeat(2)}`;
    }

    return `The ${firstCharUpper}${remainingOfStr}`;
}

// Example
console.log(bandNameGenerator('knife') === 'The Knife');
console.log(bandNameGenerator('tart') === 'Tartart');
console.log(bandNameGenerator('sandles') === 'Sandlesandles');
console.log(bandNameGenerator('bed') === 'The Bed');