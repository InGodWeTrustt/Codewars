const pluck = (objs, names) => {
    const res = [];
    objs.forEach( obj => obj[names] ? res.push(obj[names]) :res.push(undefined));
    return res;
}


console.log(pluck([{a:1}, {a:2}], 'a'));      // -> [1,2]
console.log(pluck([{a:1, b:3}, {a:2}], 'b')); // -> [3, undefined]