/**
        summation(2) -> 3
        1 + 2

        summation(8) -> 36
        1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
 */

const summation = num => {
    let res = 0;
    for (let i = 1; i <= num; i++) {
        res += i;
    }
    return res;
}


console.log(summation(8)); //36
console.log(summation(1)); //1