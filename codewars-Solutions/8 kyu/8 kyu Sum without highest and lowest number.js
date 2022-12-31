function sumArray(array) {
    if (!array) return 0;
    const copy = [...array]
    copy.sort((a, b) => a - b)

    let res = 0;
    for (let i = 1; i < copy.length - 1; i++) {
        const element = copy[i];
        res += element
    }

    return res;
}