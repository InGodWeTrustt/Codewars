/**
 * Возвращает количество нулей в конце факториала в произвольной системе счисления для больших чисел
 * @param {*} base - целое число от 2 до 256
 * @param {*} number - целое число от 1 до 1 000 000
 * @returns 
 */
function zeroes(base, number) {
    let count = Number.MAX_SAFE_INTEGER;
    for (let i = 2; i <= base; i++) {
        if (base % i === 0) {
            let c = 0;
            while (base % i === 0) {
                base /= i;
                c++;
            }
            let p = i;
            let zeroes = 0;
            while (p <= number) {
                zeroes += Math.floor(number / p);
                p *= i;
            }
            count = Math.min(count, Math.floor(zeroes / c));
        }
    }
    return count;
}

console.log(zeroes( 40, 10), 2, 'base > 36');
console.log(zeroes( 17, 16), 0, 'prime base - no zeroes');
console.log(zeroes(  7, 50), 8, 'prime base & higher powers');
console.log(zeroes(100, 50), 6, 'base = 100');
console.log(zeroes(12, 26), 10, 'p1^2 ~ p2 >>>');
console.log(zeroes(12, 27), 11, 'p1^2 ~ p2 <<<');
console.log(zeroes(12, 28), 12, 'p1^2 ~ p2 <<<');
console.log(zeroes(12, 32), 14, 'p1^2 ~ p2 >>>');
console.log(zeroes(12, 33), 15, 'p1^2 ~ p2 ===');
console.log(zeroes(80, 49), 10, 'p1 ~ p2^3 <<<');
console.log(zeroes(80, 50), 11, 'p1 ~ p2^3 >>>');
console.log(zeroes(80, 52), 12, 'p1 ~ p2^3 ===');