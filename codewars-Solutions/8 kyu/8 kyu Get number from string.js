function getNumberFromString(s) {
    return +s.replace(/[^0-9]+/g, '');
}

console.log(getNumberFromString("1") === 1);
console.log(getNumberFromString("123") === 123);
console.log(getNumberFromString("this is number: 7") === 7);
console.log(getNumberFromString("$100 000 000") === 100000000);
console.log(getNumberFromString("hell5o wor6ld") === 56);
console.log(getNumberFromString("one1 two2 three3 four4 five5") === 12345);