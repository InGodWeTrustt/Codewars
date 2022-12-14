function countSmileys(arr) {
    return arr.filter(smile => /(:|;)(-|~)?(\)|D)/.test(smile)).length
}

console.log(countSmileys([':D',':~)',';~D',':)']), 4);