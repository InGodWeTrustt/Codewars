function reverseInvert(array){
    return array
    .filter(num => typeof num === 'number' && Number.isInteger(num))
    .map(num => {
        // Math.sign(-3) = 1; Math.sign(1) = -1
        const inverseSign = -1 * Math.sign(num)
        // replace(/-/, '') - remove minus
        const cur = String(num).replace(/-/, '').split('').reverse().join('');
        return inverseSign * parseFloat(cur)
    })
  }


  console.log(reverseInvert([-10]));
  console.log(reverseInvert([1,2,3,4,5, null, true, false, 'dcscs'])); // [ -1, -2, -3, -4, -5 ]


