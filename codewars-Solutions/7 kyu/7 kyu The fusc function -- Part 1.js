/**
 * The fusc function is defined recursively as follows:

     fusc(0) = 0
     fusc(1) = 1
     fusc(2 * n) = fusc(n)
     fusc(2 * n + 1) = fusc(n) + fusc(n + 1)
 */
function fusc(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else if (n % 2 === 0) {
        return fusc(n / 2);
    } else {
        let m = (n - 1) / 2;
        return fusc(m) + fusc(m + 1);
    }
}

console.log(fusc(0) === 0);
console.log(fusc(1) === 1);
console.log(fusc(2) === 1);
console.log(fusc(3) === 2);
console.log(fusc(4) === 1);
console.log(fusc(5) === 3);
console.log(fusc(6) === 2);
console.log(fusc(9) === 4);