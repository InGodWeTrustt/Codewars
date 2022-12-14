var capitals = function (word) {
    return [...word].map((char, i) => /[A-Z]/g.test(char) ? i : '').filter(x => x !== '')
};


console.log(capitals('CodEWaRs')); // [0,3,4,6] 