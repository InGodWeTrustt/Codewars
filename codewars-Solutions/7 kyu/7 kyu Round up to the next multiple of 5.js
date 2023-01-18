/**
        input:    output:
        0    ->   0
        2    ->   5
        3    ->   5
        12   ->   15
        21   ->   25
        30   ->   30
        -2   ->   0
        -5   ->   -5
*/

function roundToNext5(n) {
    let res;

    for (let i = n; ; i++) {
        if(i % 5 === 0){
            res = i;
            break;
        }
    }

    return res;
}

console.log(roundToNext5(21)); // 25
console.log(roundToNext5(12)); // 15


