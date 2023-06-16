/**
 * Создайте функцию, которая принимает целое положительное число и возвращает следующее большее число, которое можно составить, переставляя его цифры. Например:

        12 ==> 21
        513 ==> 531
        2017 ==> 2071
Если цифры нельзя переставить, то вернуть -1

        9 ==> -1
        111 ==> -1
        531 ==> -1
 */
function nextBigger(n) {
    let digits = n.toString().split('');
    let i, j;
    for (i = digits.length - 1; i > 0; i--) {
        if (digits[i] > digits[i - 1]) {
            break;
        }
    }
    if (i == 0) {
        return -1;
    }
    let x = digits[i - 1];
    let smallest = i;
    for (j = i + 1; j < digits.length; j++) {
        if (digits[j] > x && digits[j] < digits[smallest]) {
            smallest = j;
        }
    }
    let temp = digits[i - 1];
    digits[i - 1] = digits[smallest];
    digits[smallest] = temp;
    let sorted = digits.slice(i).sort();
    let result = parseInt(digits.slice(0, i).concat(sorted).join(''));
    return result;
}

console.log(nextBigger(12), 21);
console.log(nextBigger(513), 531);
console.log(nextBigger(2017), 2071);
console.log(nextBigger(414), 441);
console.log(nextBigger(144), 414);