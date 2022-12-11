function getLengthOfMissingArray(arrayOfArrays) {
    if(Object.is(arrayOfArrays, null)) return 0;
    if(!arrayOfArrays.every(arr => arr?.length > 0 && !Object.is(arr, null))) return 0;
    if (!arrayOfArrays.length) return 0;
  
    const arrLen = arrayOfArrays.sort((a, b) => a.length - b.length).map(x => x.length)
    let res = arrLen[0]
    
    for (let i = 0; i < arrLen.length; i++) {
        const elem = arrLen[i]
        if (elem - res < 2) {
            res = elem
        } else {
            res = elem - 1;
            break;
        }

    }
  
    return res
}



console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]));
console.log(getLengthOfMissingArray([[1, 2], null]));