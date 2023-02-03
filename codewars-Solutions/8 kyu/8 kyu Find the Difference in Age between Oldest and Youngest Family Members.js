function differenceInAges(ages) {
    ages.sort((a, b) => a - b)
    const [min, max] = [ages[0], ages[ages.length - 1]]
    return [min, max, (max - min)]
}


console.log(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
