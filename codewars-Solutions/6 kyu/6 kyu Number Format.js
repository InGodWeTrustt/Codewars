var numberFormat = function (number) {
    return number.toString().replace(/\B(?=([0-9]{3})+(?![0-9]))/g, ",");
};


// Example Test Cases
console.log(numberFormat(100000), '100,000');
console.log(numberFormat(5678545), '5,678,545');
console.log(numberFormat(-420902), '-420,902');