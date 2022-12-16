function add(n) {
  function inner(arg) {
    return add(n + arg);
  }
  inner.valueOf = () => n;
  return inner
}



console.log(add(1)(2), 3);
console.log(add(1)(2)(3), 6);
console.log(add(1)(2)(3)(4), 10);
console.log(add(1)(2)(3)(4)(5), 15);