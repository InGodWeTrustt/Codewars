function rgb(...args) {
    return args.map(val => {
        const color = handleRGB(val);
        const res = color.toString(16).toUpperCase();
        return res.length < 2 ? '0' + res : res;
    })
        .join('')
}

const handleRGB = val => {
    if (val < 0) {
        return 0
    } else if (val > 255) {
        return 255
    }
    return val
}

console.log(rgb(0, 0, 0), '000000')
console.log(rgb(0, 0, -20), '000000')
console.log(rgb(300, 255, 255), 'FFFFFF')
console.log(rgb(173, 255, 47), 'ADFF2F')