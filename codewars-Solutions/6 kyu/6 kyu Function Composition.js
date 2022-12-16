/**
    const addOne = (a) => a + 1
    const multTwo = (b) => b * 2
    const addOneMultTwo = (c) => multTwo(addOne(c))
    addOneMultTwo(5) // returns 12
 */

const compose = (...fn) => a => fn.reduceRight((arg, fn) => fn(arg), a);

// Test
const addOne = (a) => a + 1
const multTwo = (b) => b * 2

console.log(compose(addOne, multTwo)(5));