/**
 * 5, 2, "add"   --> 7
5, 2, "subtract" --> 3
5, 2, "multiply" --> 10
5, 2, "divide"   --> 2.5
 */

// Написать функцию, которая будет производить простейшие вычисления по типу сложения, вычитания, деления, умножения

function arithmetic(a, b, operator) {
    const op = {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
        divide: (a, b) => a / b,
        multiply: (a, b) => a * b,
    }
    return op[operator](a, b)
}

console.log(arithmetic(2, 4, 'add'))
console.log(arithmetic(2, 4, 'divide'))
console.log(arithmetic(2, 4, 'multiply'))
console.log(arithmetic(2, 4, 'subtract'))