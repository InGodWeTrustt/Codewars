var humanYearsCatYearsDogYears = function (humanYears) {
    let catYears = 15;
    let dogYears = 15;

    for (let i = 1; i < humanYears; i++) {
        if (i === 1) {
            catYears += 9;
            dogYears += 9
        } else {
            catYears += 4;
            dogYears += 5
        }
    }

    return [humanYears, catYears, dogYears];
}


console.log(humanYearsCatYearsDogYears(10), [10,56,64])