const isOdd = number => number % 2 !== 0;

function findOddNames(list) {
    return list.filter(({firstName}) => {
        const sum = [...firstName].reduce((a, b) => a + b.codePointAt(), 0);
        return isOdd(sum);
    })
}


