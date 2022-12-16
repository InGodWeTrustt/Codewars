function MagicFunction(...args) {
  let res = 0;
  
  function inner(...args) {
    const filtered = args.filter( arg => !isNaN(arg));
    res += filtered.reduce((a,b) => a + +b, 0); 
    return inner;
  }
  
  inner.valueOf = () => res;
  return inner(...args);
}


console.log(MagicFunction(), 0);
console.log(MagicFunction(1, 2), 3);
console.log( MagicFunction(1, 3)(2), 6 );
console.log( MagicFunction(1)(2, 3), 6 );
console.log( MagicFunction(1)(2)(3), 6 );
console.log( MagicFunction(1, 2)(3, 4, 5)(6)(7, 10), 38 );