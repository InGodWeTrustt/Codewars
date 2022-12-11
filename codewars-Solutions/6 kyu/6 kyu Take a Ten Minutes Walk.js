function isValidWalk(walk) {
    let [ns, ew] = [0, 0];
  
    if (walk.length === 10) {
        walk.forEach(direction => {
            if (direction === 'n') ns += 1;
            if (direction === 's') ns -= 1;
            if (direction === 'e') ew += 1;
            if (direction === 'w') ew -= 1;
        })
    } else {
        return false;
    }
    return ns === 0 && ew === 0;
}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), 'should return true');