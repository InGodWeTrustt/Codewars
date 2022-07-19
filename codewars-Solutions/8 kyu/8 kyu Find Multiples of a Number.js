
function findMultiples(integer, limit) {
    let res = [integer]
    let count = 2;
    let last = res[0]
    while (last < limit && integer*count <= limit) {
        res.push(integer*count);
        count++;
        last = res[res.length-1];
    }
    return res;
}

console.log(findMultiples(5, 25)); // [5, 10, 15, 20, 25]