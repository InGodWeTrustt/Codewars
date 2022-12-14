function updateLight(current) {
    const colors = ['green', 'yellow', 'red']
    const curIdx = colors.findIndex(color => color === current)
    return curIdx + 1 === colors.length ? colors[0] : colors[curIdx + 1]
}


console.log(updateLight('green'));
console.log(updateLight('yellow'));
console.log(updateLight('red'));