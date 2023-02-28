function dashatize(num) {
    if (!Number.isInteger(num) || Number.isNaN(num)) return 'NaN';

    const str = String(Math.abs(num))
        .split('')
        .map(char => char % 2 !== 0 ? `-${char}-` : char)
        .join('');

    return str.replace(/-{2}/g, '-').replace(/^-*|-*$/g, '');
}

console.log(dashatize(274) === "2-7-4");
console.log(dashatize(5311) === "5-3-1-1");
console.log(dashatize(86320) === "86-3-20");
console.log(dashatize(974302) === "9-7-4-3-02");