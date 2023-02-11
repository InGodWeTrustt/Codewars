const calculate = function calculate(a, o, b) {
    if(!/[+-/*]/.test(o) || (o === '/' && b === 0)) return null;

    let res = 0;

    if (o === "+") {
        res = a + b;
    } else if (o === "-") {
        res = a - b;
    } else if (o === "/" && b !== 0) {
        res = a / b;
    } else {
        res = a * b;
    }

    return res;
}


console.log(calculate(2,"+", 4), 6);
console.log(calculate(6,"-", 1.5), 4.5);
console.log(calculate(-4,"*", 8), -32);
console.log(calculate(49,"/", -7), -7);
console.log(calculate(8,"m", 2), null);
console.log(calculate(4,"/",0), null);