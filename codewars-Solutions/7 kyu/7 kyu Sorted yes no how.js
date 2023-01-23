function isSortedAndHow(array) {

    // we need to make a copy of the array
    // because the method sort() changes the array in place
    const asc = [...array].sort((a, b) => a - b);
    const desc = [...array].sort((a, b) => b - a);

    // [1,2,3].toString() = '1,2,3'  <-equal->  `${[1,2,3]}` = '1,2,3'
    if (`${asc}` === `${array}`) {
        return 'yes, ascending'
    } else if (`${desc}` === `${array}`) {
        return 'yes, descending'
    }

    return 'no'
}

console.log(isSortedAndHow([1, 2]), 'yes, ascending');
console.log(isSortedAndHow([15, 7, 3, -8]), 'yes, descending');
console.log(isSortedAndHow([4, 2, 30]), 'no');
