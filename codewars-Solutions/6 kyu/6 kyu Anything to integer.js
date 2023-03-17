function toInteger(n) {
    if (Number.isNaN(+n) || !String(n).length || (n === Infinity || n === -Infinity)) return 0;
    if (typeof n === 'boolean') return Number(n);
    const res = +String(n).match(/(?<int>[-]?[0-9]+(e[+-][0-9])?)[.]?[0-9]*/).groups.int;
    return +String(res).split('.')[0];
}

// Example
console.log(toInteger("4.55") === 4)