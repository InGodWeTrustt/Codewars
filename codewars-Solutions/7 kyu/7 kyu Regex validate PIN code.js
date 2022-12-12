// PIN Codes 4 digits or 6 digits

function validatePIN(pin) {
   return /^(\d{4}|\d{6})$/.test(pin)
}


console.log(validatePIN("1234567"), false)
console.log(validatePIN("-1234"), false)
console.log(validatePIN("1.234"), false)
console.log(validatePIN("-1.234"), false)

console.log(validatePIN("1234"),true)
console.log(validatePIN("0000"),true)
console.log(validatePIN("1111"),true)
console.log(validatePIN("123456"),true)
console.log(validatePIN("098765"),true)
console.log(validatePIN("000000"),true)
console.log(validatePIN("123456"),true)
console.log(validatePIN("090909"),true)