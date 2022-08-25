
function comp(arr1, arr2) {
    if (!arr1 || !arr2) return false;
    return JSON.stringify(arr1.map(x => x ** 2).sort()) === JSON.stringify(arr2.sort());
}