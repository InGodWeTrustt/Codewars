// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

function expandedForm(num) {
  const res = [];

  while (String(num).length > 1) {
    let dif = String(num)[0] * Math.pow(10, String(num).length - 1);
    num -= dif;
    res.push(dif);
  }

  if (num !== 0) {
    res.push(num);
  }

  return res.join(' + ')
}

console.log(expandedForm(12));
console.log(expandedForm(42));
console.log(expandedForm(165));
console.log(expandedForm(70304));
console.log(expandedForm(79359800));