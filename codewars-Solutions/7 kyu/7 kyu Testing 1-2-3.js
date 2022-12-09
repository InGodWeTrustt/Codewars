// 7 kyu Testing 1-2-3
const number = array =>  array.map((char, idx) => `${idx + 1}: ${char}`)

console.log(number(['a', 'b', 'c']))
console.log(number([]))