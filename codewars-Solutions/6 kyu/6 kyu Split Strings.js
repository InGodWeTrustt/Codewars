function solution(str) {
    const res = [];
    [...str].forEach((c, i) => {
        if (i % 2 == 0) {
            res.push(c)
        } else {
            res[res.length - 1] += c;
        }
    })
    
    let last = res.slice(-1)
    if (last[0]?.length < 2) {
        res[res.length - 1] += '_'
    }

    return res
}

console.log(solution("abcdef"), ["ab", "cd", "ef"])
console.log(solution("abcdefg"), ["ab", "cd", "ef", "g_"])
console.log(solution(""), [])