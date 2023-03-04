function dataReverse(data) {
    const res = [];
    let i = 0;

    while (i < data.length) {
        res.push(data.slice(i, i + 8).join(''))
        i += 8;
    }
    // example res = [ '11111111', '00000000', '00001111', '10101010' ]
    // reverse =  [ '10101010', '00001111', '00000000', '11111111' 
    const reverse = res.reverse();

    return [...reverse.join('')].map(Number);
}

const data1 = [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0]
const data2 = [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1]
console.log(dataReverse(data1)) // data1 === data2