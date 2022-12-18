function getAverageAge(list) {
    return Math.round(list.reduce((a, b) => a + b.age, 0) / list.length)
}