var sortArray = function (value) {
    return value.split('').sort((c, p) => +c - +p).join('');
}

console.log(sortArray('12345'), '12345');
console.log(sortArray('54321'), '12345');
console.log(sortArray('34251'), '12345');