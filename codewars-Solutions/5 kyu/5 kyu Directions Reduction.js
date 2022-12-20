function dirReduc(arr) {
    const map = {
        'NORTH': 'SOUTH',
        'SOUTH': 'NORTH',
        'EAST': 'WEST',
        'WEST': 'EAST'
    }
    const res = [];
    arr.forEach((dir, i) => {
        if (res.length) {
            if (map[dir] === res[res.length - 1]) {
                res.pop()
            } else {
                res.push(dir)
            }
        } else {
            res.push(dir)
        }
    })
    return res;
}

