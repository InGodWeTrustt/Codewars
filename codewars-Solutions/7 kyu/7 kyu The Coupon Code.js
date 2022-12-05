function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    if (enteredCode !== correctCode) return false;
    if (new Date(currentDate) > new Date(expirationDate)) return false;
    return true;
}


console.log(checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014'), true);
console.log(checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014'), false);