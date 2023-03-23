// [["101",16],["7640",8],["1",9]] -> 4258
function sumItUp(numbersWithBases) {
    return numbersWithBases.reduce((a, b) => a + parseInt(b[0], b[1]), 0)
}

console.log(sumItUp([["101", 2], ["10", 8]]) === 13);
console.log(sumItUp([["ABC", 16], ["11", 2]]) === 2751);
console.log(sumItUp([["101", 16], ["7640", 8], ["1", 9]]) === 4258);