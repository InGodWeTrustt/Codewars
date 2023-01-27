function arrayInfo(arr) {
    if (!arr.length) return 'Nothing in the array!';

    const res = Array(5).fill([null]);

    // length of the array
    res[0] = [arr.length];

    for (let i = 0; i < arr.length; i++) {
        const elem = arr[i];

        if (Number.isInteger(elem)) {
            res[1] = [(+res[1] || 0) + 1];
        } else if (/\d\.\d+/.test(String(elem))) {
            res[2] = [(+res[2] || 0) + 1];
        } else if (/^\s+$/.test(elem)) {
            res[4] = [(+res[4] || 0) + 1];
        } else if (typeof elem === 'string') {
            res[3] = [(+res[3] || 0) + 1];
        }
    }

    return res;
}


console.log(arrayInfo([1,2,3.33,4,5.01,'bass','kick',' ']),[[8],[3],[2],[2],[1]]);
console.log(arrayInfo([0.001,2,' ']),[[3],[1],[1],[null],[1]]);
console.log(arrayInfo([]),'Nothing in the array!');
console.log(arrayInfo([' ']),[[1],[null],[null],[null],[1]]);
console.log(arrayInfo([{}]),[[1],[null],[null],[null],[null]]);
console.log(arrayInfo([' ',' ']),[[2],[null],[null],[null],[2]]);
console.log(arrayInfo(['jazz']),[[1],[null],[null],[1],[null]]);
console.log(arrayInfo([4]),[[1],[1],[null],[null],[null]]);
console.log(arrayInfo([3.1416]),[[1],[null],[1],[null],[null]]);
console.log(arrayInfo([4]),[[1],[1],[null],[null],[null]]);
console.log(arrayInfo([11,22,33.33,44.44,'hasan','ahmad']),[[6],[2],[2],[2],[null]]);
console.log(arrayInfo(['a','b','c','d',' ']),[[5],[null],[null],[4],[1]]);
console.log(arrayInfo([1,2,3,4,5,6,7,8,9]),[[9],[9],[null],[null],[null]]);
console.log(arrayInfo([1,2.23,'string',' ']),[[4],[1],[1],[1],[1]]);
console.log(arrayInfo([' ',' ']),[[2],[null],[null],[null],[2]]);