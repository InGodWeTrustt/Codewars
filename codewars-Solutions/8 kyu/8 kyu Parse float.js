function parseF(s) {
    if (Number.isNaN(+s) || typeof s === 'boolean') return null;

    return parseFloat(s);
}

console.log(parseF("1"), 1);