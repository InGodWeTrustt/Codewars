function calculator(a, b, sign) {
    if (!/[-+*\/]/.test(sign) || typeof a !== 'number' || typeof b !== 'number') return "unknown value";
    return eval(`${a}${sign}${b}`)
}

// Example
console.log(calculator(1,2,"+"), 3, "calculate");
console.log(calculator(1,2,"-"), -1, "calculate");
console.log(calculator(3,5,"*"), 15, "calculate");
console.log(calculator(6,2,"/"), 3, "calculate");
console.log(calculator(6,2,"$"), "unknown value"); 
console.log(calculator(6,"h","*"), "unknown value");