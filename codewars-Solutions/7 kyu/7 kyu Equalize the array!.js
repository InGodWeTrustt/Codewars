function equalize(array) {
    const first = array[0];
    const res = [];

    for (let i = 0; i < array.length; i++) {
        const dif = array[i] - first;
        res.push(dif >= 0 ? `+${dif}` : `${dif}`)
    }

    return res;
}

console.log(equalize([20, 30, 35, 10]), (["+0", "+10", "+15", "-10"]));
console.log(equalize([]), ([]));
console.log(equalize([10, 12, 24, 50, 0, 15, 20]), (["+0", "+2", "+14", "+40", "-10", "+5", "+10"]));