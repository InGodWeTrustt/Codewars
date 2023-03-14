const sumAvgArr = arr => arr.reduce((a, b) => a+b, 0) / arr.length

const sumAverage = (arr) => {
  let result = 0;
  arr.forEach(subArray => result += sumAvgArr(subArray));
  return Math.floor(result);
}

console.log(sumAverage([[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]]), 44);
console.log(sumAverage([[-4, 3, -8, -2], [2, 9, 1, -5], [-7, -2, -6, -4]]), -6);