function tailSwap(arr) {
    return arr.reduce((a, b) => {
        const [f1, s1] = a.split(':');
        const [f2, s2] = b.split(':');
        return [`${f1}:${s2}`, `${f2}:${s1}`];
    })
}

console.log(tailSwap(['abc:123', 'cde:456'])); // ['abc:456', 'cde:123']
console.log(tailSwap(['a:12345', '777:xyz'])); // ['a:xyz', '777:12345']