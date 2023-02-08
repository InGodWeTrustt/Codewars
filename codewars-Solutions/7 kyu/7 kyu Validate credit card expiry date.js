function checkExpiryValid(date) {
    const curDate = new Date();
    curDate.setDate(1);
    curDate.setHours(0, 0, 0, 0);

    let [month, year] = date.split(/[^0-9]+/);

    if (year.length < 4) {
        year = `20${year}`
    }

    // new Date().getTime() equal +new Date()
    return +new Date(year, month - 1) >= +curDate ? true : false;
}

console.log(checkExpiryValid('03/15'), false, 'should not approve dates in the past')
console.log(checkExpiryValid('03/33'), true, 'should approve dates in the future')
console.log(checkExpiryValid('03-15'), false, 'should work with any separator')
console.log(checkExpiryValid('03 / 15'), false, 'should work with any separator')
console.log(checkExpiryValid('03-2015'), false, 'should work with any separator')