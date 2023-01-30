function getMissingElement(arr) {
    const curArr = arr.sort((a, b) => a - b).join('|');
    return +'0123456789'.replace(new RegExp(`${curArr}`, 'g'), '')
}


console.log(getMissingElement( [0,5,1,3,2,9,7,6,4]), 8);
console.log(getMissingElement( [9,2,4,5,7,0,8,6,1]), 3);