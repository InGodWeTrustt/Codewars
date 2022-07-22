function posAverage(s) {
    let arr = s.split(/,\W/), pos = 0, total = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        for (let k = 0; k < arr[i].length; k++) {
          if (arr[i][k] === arr[j][k]) pos++
          total++
        }
      }
    }
  return (100 * pos / total);
}

console.log(posAverage("466960, 069060, 494940, 060069, 060090, 640009, 496464, 606900, 004000, 944096")) // 26.6666666667



