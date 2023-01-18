const sequenceSum = (begin, end, step) => {
    if (begin > end) {
        return 0;
    }

    let res = 0;
    
    for (let i = begin; i <= end; i += step) {
        res += i;
    }

    return res;
};


console.log(sequenceSum(2, 2, 2)); // 2
console.log(sequenceSum(2, 6, 2)); // 12