function divCon(x) {
    let sumSI = sumNSI = 0;
    x.forEach(elem => typeof elem === 'string' ? sumSI += +elem : sumNSI += elem);
    return sumNSI - sumSI
}

// Example
console.log(divCon([9, 3, '7', '3']), 2);
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14); 
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 13);