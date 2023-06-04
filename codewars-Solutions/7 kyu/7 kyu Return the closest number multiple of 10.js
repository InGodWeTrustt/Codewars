// Данно число, необходимо вернуть ближайшее к нему число, которое делится на 10
const closestMultiple10 = num => {
    return Math.round(num / 10) * 10;
};

// Примеры тестов
console.log(closestMultiple10(15) === 20); // Output: true
console.log(closestMultiple10(18) === 20); // Output: true
console.log(closestMultiple10(10) === 10); // Output: true
console.log(closestMultiple10(14) === 10); // Output: true