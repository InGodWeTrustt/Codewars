function prefill(n, v) {
    if (!Number.isInteger(+n) || +n < 0 || typeof n === 'boolean') {
        throw new TypeError(`${n} is invalid`)
    }

    return Array.from({ length: +n }).fill(v)
}

console.log(prefill(3,1)); // [1,1,1]
console.log(prefill(2,'abc')); // ['abc','abc']
console.log(prefill('1',1)); // [1]
console.log(prefill(3, prefill(2,'2d'))); // [['2d','2d'],['2d','2d'],['2d','2d']]
