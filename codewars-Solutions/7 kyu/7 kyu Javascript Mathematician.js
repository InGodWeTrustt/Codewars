const calculate = (...args1) => {
    return (...args2) => {
        return args1.concat(args2).reduce((a, b) => a + b , 0)
        // return [...args1, ...args2].reduce((a, b) => a + b, 0)
    }
}




console.log(calculate(1)(1)) // sh)ould return 2
console.log(calculate(1,1)(1)) // )should return 3
console.log(calculate(1,1)(1,-1))// should return 2
console.log(calculate(2,4)(3,7,1)) // should return 17