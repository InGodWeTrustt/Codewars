function longestConsec(strarr, k) {
    if (k <= 0 || k > strarr.length) return ''
    let res = ''
    for (let i = 0; i < strarr.length; i++) {
        const tmp = strarr.slice(i, i + k);
        if (tmp.join('').length > res.length) {
            res = tmp.join('')
        }
    }
    return res
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2, "abigailtheta"));