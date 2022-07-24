function arrayDiff(a, b) {
    const res = []
    if (!a.length) return res;
    for (const num of a) {
        if (b.includes(num)) {
            continue;
        }
        res.push(num);
    }
    return res;
}