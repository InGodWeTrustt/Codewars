/**
Рику нужен более быстрый способ получить произведение наибольшей пары в массиве. 
Ваша задача — создать эффективное решение для нахождения произведения двух самых больших 
целых чисел в уникальном массиве положительных чисел.
 */
function maxProduct(arr) {
    let max1 = 0;
    let max2 = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max1) {
            max2 = max1;
            max1 = arr[i];
        } else if (arr[i] > max2) {
            max2 = arr[i];
        }
    }
    return max1 * max2;
}

// Примеры тестов
console.log(maxProduct([2, 1, 5, 0, 4, 3]) === 20);
console.log(maxProduct([7, 8, 9]) === 72);
console.log(maxProduct([33, 231, 454, 11, 9, 99, 57]) === 104874);