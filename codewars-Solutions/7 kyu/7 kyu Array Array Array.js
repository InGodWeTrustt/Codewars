function explode(x) {
    const str = x.join('');

    if (/^\d+$/.test(str)) { // if all integers
        return Array.from({ length: x[0] + x[1] }).fill(x)
    } else if (/^[a-z]+$/.test(str)) { // if all words
        return 'Void!';
    } else { // either a letter or a number
        const integer = +str.replace(/[a-z]/g, '');
        return Array.from({ length: integer }).fill(x)
    }
}


console.log(explode([9, 3]), [[9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3]]);
console.log(explode(['a', 3]), [['a', 3], ['a', 3], ['a', 3]]);
console.log(explode([6, 'c']), [[6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c']]);
console.log(explode(['a', 'b']), 'Void!');
console.log(explode(["a", 0]), []); 
