function defaultExample(x, y = 7) {
    return x + y;
}

function restExample(x, ...y) {
    return x * y.length;
}

function spreadExample(...x) {
    return x.reduce((acc, cur) => acc + cur, 0);
}


console.log(defaultExample(3, 7), 10)
console.log(defaultExample(3), 10)
console.log(defaultExample(5), 12)
console.log(restExample(3,'14',6), 6)
console.log(restExample(5,'854',7,4), 15)
console.log(restExample(9), 0)
console.log(spreadExample(...[1,2,3]), 6)
console.log(spreadExample(...[6,6,6]), 18)
console.log(spreadExample(...[1,1,1]), 3)