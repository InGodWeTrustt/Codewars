function partsSums(ls) {
    if(!ls.length) return [0];
    let prevTotal = ls.reduce((a,b) => a + b);
    return [prevTotal, ...ls.map(val => prevTotal -= val)]
  }