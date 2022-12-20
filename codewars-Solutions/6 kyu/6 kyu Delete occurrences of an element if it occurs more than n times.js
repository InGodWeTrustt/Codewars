function deleteNth(arr, n) {
    const map = {}
    const res = []
    for (let i = 0; i < arr.length; i++) {
        const elem = arr[i];
        if (map[elem] >= n) {
            continue;
        } else {
            res.push(elem)
            map[elem] ? map[elem]++ : map[elem] = 1;
        }
    }
    return res;
}

console.log(deleteNth([1,1,1,2,2,3,2], 2));