/**
 * Функция giveMeFiveпринимает 1 параметр (obj),  который является объектом.
 * Создайте массив. Затем пройдите по obj, проверяя каждый ключ и значение. 
 * Если длина ключа равна 5, то добавьте ключ в свой массив. 
 * Если длина значения равна 5, то поместите значение в свой массив.
 * В конце верните свой массив.
 */
function giveMeFive(obj) {
    const result = [];
    for (let key in obj) {
        if (key.length === 5) {
            result.push(key);
        }
        if (obj[key].length === 5) {
            result.push(obj[key]);
        }
    }
    return result;
}


// Примеры тестов
// Test case 1: Test with object {Our:"earth",is:"a",beautyful:"world"}
const obj1 = {Our:"earth",is:"a",beautyful:"world"};
const expected1 = ["earth","world"];
const result1 = giveMeFive(obj1);
console.log(expected1, result1); // Output: ["earth","world"], ["earth","world"]

// Test case 2: Test with object {Ihave:"enough", money:"to",buy:"a",car:"model"}
const obj2 = {Ihave:"enough", money:"to",buy:"a",car:"model"};
const expected2 = ["Ihave","money","model"];
const result2 = giveMeFive(obj2);
console.log(expected2, result2); // Output: ["Ihave","money","model"], ["Ihave","money","model"]
