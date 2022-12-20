function towerBuilder(nFloors) {
    let stars = 0;
    let spaces = '';
    let res = []
    for (let i = 0; i < nFloors; i++) {
        // start count odd
        stars = '*'.repeat(2 * i + 1);
        // spaces
        spaces = ' '.repeat(nFloors-i-1)
        res.push(spaces + stars + spaces)
    }
    return res;
}

console.log(towerBuilder(1), ["*"]);
console.log(towerBuilder(2), [" * ", "***"]);
console.log(towerBuilder(3), ["  *  ", " *** ", "*****"]);