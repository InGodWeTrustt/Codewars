function orderFood(list) {
    const map = {}
    list.forEach(({ meal }) => {
        map[meal] ? map[meal]++ : map[meal] = 1
    });
    return map
}