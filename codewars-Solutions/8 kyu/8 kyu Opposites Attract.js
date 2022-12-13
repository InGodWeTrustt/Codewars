function lovefunc(flower1, flower2) {
    if((isEven(flower1) && isOdd(flower2) || (isEven(flower2) && isOdd(flower1)))) return true;
    return false
}

const isEven = num => num % 2 === 0
const isOdd = num => num % 2 !== 0

console.log(lovefunc(1,4), true)
console.log(lovefunc(2,2), false)
console.log(lovefunc(0,1), true)
console.log(lovefunc(0,0), false)