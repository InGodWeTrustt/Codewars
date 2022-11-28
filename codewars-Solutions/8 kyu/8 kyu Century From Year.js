// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

const century = year => Math.ceil(year/100)



console.log(century(1705), 18)
console.log(century(1900), 19)
console.log(century(1601), 17)
console.log(century(2000), 20)
console.log(century(89), 1)