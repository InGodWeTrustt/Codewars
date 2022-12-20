const output = [];
function stepDown(stair, width) {
    if (width === 0) return [];
    output.push(stair);
    if (stair <= 0 || stair - width < 0) {
      const copy = [...output];
      output.length = 0;
      return copy.reverse()
    };
    return stepDown(stair - width, width)
}

console.log(stepDown(10, 1), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(stepDown(80, 10), [0, 10, 20, 30, 40, 50, 60, 70, 80]);