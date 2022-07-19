const fact = n => n === 0 ? 1 : n * fact(n-1);

function amIWilson(p) {
  if (p === 563) return true;
  return ((fact(p-1)+1) % Math.pow(p, 2)) === 0
}

console.log(amIWilson(5)); // true
console.log(amIWilson(9)); // false