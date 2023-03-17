function separateTypes(input) {
    const res = {};
    input.forEach( elem => {
        if (!res[typeof elem]) {
            res[typeof elem] = [];
          }
          res[typeof elem].push(elem);
    })
    return res;
}

console.log(separateTypes(['a', 1, 2, false, 'b'])); //  { number: [1, 2], string: ['a', 'b'], boolean: [false] }
console.log(separateTypes(['a', 1, 2])); // { number: [1, 2], string: ['a'] }