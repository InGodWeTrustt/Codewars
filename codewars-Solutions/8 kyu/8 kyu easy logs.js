
/**
 * Найти сумму двух логарифмов по основанию X
 * @param {*} x  - основание логарифма
 * @param {*} a - logx(a)
 * @param {*} b - logx(b)
 * @returns  logx(a)+logx(b)
 */
function logs(x, a, b) {
    return changeBaseTo10(x, a) + changeBaseTo10(x, b)
}

function changeBaseTo10(x, val) {
    return Math.log10(val) / Math.log10(x)
}



console.log(logs(5, 2, 3), 1.1132827525593785);
console.log(logs(1000, 2, 3), 0.25938375012788123);