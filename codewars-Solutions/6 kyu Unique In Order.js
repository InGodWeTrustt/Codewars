function uniqueInOrder (iter) {
    let res;
    if (typeof iter === 'string') {
        res = String(iter).split('').reduce(reducer, []);
    } else {
        res = iter.reduce(reducer, [])
    }
    return res;
}


function reducer(prev, cur, i) {
    if (i === 0) {
        return [cur]
    }
    else {
        return prev[prev.length - 1] === cur ?  [...prev] : [...prev, cur]
    }
}