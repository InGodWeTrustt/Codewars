function generateShape(integer) {
    const res = [];
    for (let i = 0; i < integer; i++) {
        const str = '+'.repeat(integer)
        res.push(str);
    }
    return res.join('\n')
}

// Example
console.log(generateShape(8) === '++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++' );