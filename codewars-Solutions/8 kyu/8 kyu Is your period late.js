// Return true if the number of days passed from last to today is greater than cycleLength
function periodIsLate(last, today, cycleLength) {
    // Number of milliseconds in a day
    const oneDay = 24 * 60 * 60 * 1000; 
    const daysPassed = Math.round(Math.abs((today - last) / oneDay));
    return daysPassed > cycleLength;
}

console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35)); // false
console.log(periodIsLate(new Date(2016, 6, 12), new Date(2016, 7, 10), 28)); // true
