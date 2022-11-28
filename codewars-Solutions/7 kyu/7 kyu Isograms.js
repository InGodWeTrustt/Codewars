
// Нет повторяющихся букв


function isIsogram(str) {
    return str.length == new Set(str.toLowerCase()).size
}


console.log(isIsogram('Dermatoglyphics')); // true
console.log(isIsogram('moose')); // false
