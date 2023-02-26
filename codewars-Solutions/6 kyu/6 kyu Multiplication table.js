multiplicationTable = function (size) {
    const firstRow = Array.from({ length: size }, (_, i) => i + 1);
    const res = [firstRow];

    for (let i = 1; i < firstRow.length; i++) {
        const tmp = []
        for (let j = 0; j < firstRow.length; j++) {
            tmp.push(firstRow[i] * firstRow[j])
        }
        res.push(tmp);
    }

    return res
}


// Example
console.log(multiplicationTable(3)); // [[1,2,3], [2,4,6], [3,6,9]]