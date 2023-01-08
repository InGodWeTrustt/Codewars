const findVolume = x => x.reduce((acc, cur) => acc * cur, 1);

const findDifference = (a, b) => {
    // V = w * l * h (w - width, l - length, h - height) 
    return Math.abs(findVolume(a) - findVolume(b))
}


console.log(findDifference([3, 2, 5], [1, 4, 4]), 14);
console.log(findDifference([9, 7, 2], [5, 2, 2]), 106);