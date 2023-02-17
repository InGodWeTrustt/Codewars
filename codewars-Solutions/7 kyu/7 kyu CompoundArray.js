function compoundArray(a, b) {
    const res = [];
    const maxLen = Math.max(a.length, b.length);

    for (let i = 0; i < maxLen; i++) {
        typeof a[i] !== 'undefined' && res.push(a[i]);
        typeof b[i] !== 'undefined' && res.push(b[i]);
    }

    return res;
}

// Example
console.log(compoundArray([11, 12], [21, 22, 23, 24])); // [11, 21, 12, 22, 23, 24]);
console.log(compoundArray([2147483647, 2147483646, 2147483645, 2147483644, 2147483643], [9])); // [2147483647,9,2147483646,2147483645,2147483644,2147483643]);
console.log(compoundArray([214, 215, 216, 217, 218], [])); //  [214,215,216,217,218]);
console.log(compoundArray([], [314, 315, 316, 317, 318])); //  [314,315,316,317,318]);