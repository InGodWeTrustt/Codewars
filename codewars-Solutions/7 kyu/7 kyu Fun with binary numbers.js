// very hard kata this is not level 7 kyu
function solution(n, b) {
    if (b == 0 || n == 0 || (2 ** n - 1) < b) return [];

    const res = [];
    const targetLength = (2 ** n - 1).toString(2).length;
    const binary = b.toString(2).padStart(targetLength, '0');
    const posOneInStr = getAllPos(binary);

    for (let i = 1; i <= 2 ** n - 1; i++) {
        const cur = i.toString(2).padStart(targetLength, '0');

        if (posOneInStr.every(idx => cur[idx] === '1')) {
            res.push(i)
        }
    }

    return res;
}

function getAllPos(str) {
    const res = [];
    str.split('').forEach((num, idx) => +num === 1 ? res.push(idx) : '')
    return res;
}


console.log(solution(4,2),[2,3,6,7,10,11,14,15]);
console.log(solution(6,8),[8, 9, 10, 11, 12, 13, 14, 15, 24, 25, 26, 27, 28, 29, 30, 31, 40, 41, 42, 43, 44, 45, 46, 47, 56, 57, 58, 59, 60, 61, 62, 63]);
console.log(solution(5,32),[]);
console.log(solution(6,0),[]);
console.log(solution(0,1),[]);