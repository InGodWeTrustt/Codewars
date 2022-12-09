/**
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"
 **/

function divisors(integer) {
  const divisors = []
    for (let i = 2; i < integer; i++) {
        integer % i === 0 ? divisors.push(i) : ''
  }
  return divisors.length ? divisors : `${integer} is prime`
};

console.log(divisors(15), [3, 5]);
console.log(divisors(12), [2, 3, 4, 6]);
console.log(divisors(13), "13 is prime");
console.log(divisors(7), "7 is prime");
