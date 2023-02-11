function peelPairs(str, n) {
  let res = str;

  for (let i = 0; i < res.length; i++) {
    for (let j = i + 1; j < res.length; j++) {
      if (+res[i] + +res[j] === n) {
        res = res.replace(/./g, (char, idx) => (idx === i || idx === j) ? '' : char);
        i--;
        break;
      }
    }
  }

  return res;
}

// Example
console.log(peelPairs('14642', 3) === '464');
console.log(peelPairs('732374', 6) === '77');
console.log(peelPairs('245638363', 10) === '53363');