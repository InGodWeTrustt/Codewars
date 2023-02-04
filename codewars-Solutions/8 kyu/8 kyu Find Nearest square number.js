function nearestSq(n) {
    const sqrNum = Math.sqrt(n)

    if (Number.isInteger(sqrNum)) {
        return n;
    }

    const prevNum = Math.floor(sqrNum)
    const nextNum = prevNum + 1;

    if (Math.abs(prevNum ** 2 - n) < Math.abs(nextNum ** 2 - n)) {
        return prevNum ** 2;
    } else {
        return nextNum ** 2;
    }
}

console.log(nearestSq(1), 1);
console.log(nearestSq(2), 1);
console.log(nearestSq(10), 9);
console.log(nearestSq(111), 121);
console.log(nearestSq(9999), 10000)