function stray(numbers) {
    const map = {};
    let res;

    numbers.forEach(num => map[num] ? map[num]++ : map[num] = 1);

    for (const prop in map) {
        if (map[prop] === 1) res = Number(prop)
    }

    return res;
}

console.log(stray([1, 1, 2]), 2);
console.log(stray([1, 2, 1]), 2);
console.log(stray([2, 1, 1]), 2);