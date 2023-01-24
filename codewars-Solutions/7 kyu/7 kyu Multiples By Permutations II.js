function findLowestInt(k) {
    const k2 = k + 1;

    for (let n = 2; ; n++) {
        const nk1 = String(n * k).split('').sort((a, b) => +a - +b).join('');
        const nk2 = String(n * k2).split('').sort((a, b) => +a - +b).join('');

        if (nk1 === nk2) {
            return n;
        }
    }
}

console.log(findLowestInt(325), 477);
console.log(findLowestInt(599), 2394);
console.log(findLowestInt(855), 999);
