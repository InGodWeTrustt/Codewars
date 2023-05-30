/**
 * Подсчитать все строковые значения внутри объекта
 */
function strCount(obj) {
    let count = 0;
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            count++;
        } else if (typeof obj[key] === 'object') {
            count += strCount(obj[key]);
        }
    }
    return count;
}

// Пример теста
console.log(strCount({ first: "1", second: "2", third: false, fourth: ["anytime",2,3,4], fifth: null, sixth: undefined, seventh:{} })); // Output: 3