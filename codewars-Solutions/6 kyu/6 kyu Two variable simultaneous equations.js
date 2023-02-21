const determinant = a => a[0][0] * a[1][1] - a[0][1] * a[1][0];

const changeElem = (a, index, b) => {
  const copy = JSON.parse(JSON.stringify(a));
  copy.forEach( (subArr, i) => subArr[index] = b[i]);
  return copy;
}

function solveSimultaneous(array){
  /* Cramer's rule for solving a system of two linear equations
  
    a11*x + a12*y = b1;             | a11 a12 |           |b1 a12|         |a11 b1|
    a21*x + a22*y = b2;         Δ = | a21 a22 |  ;   Δx = |b2 a22| ;  Δy = |a21 b2|
    
    x = Δx / Δ;   y = Δy / Δ; 
  */    
  
  const matrix2x2 = [...array].map(subArr => subArr.slice(0, -1));
  const b = [...array].map(subArr => subArr[subArr.length-1]);
  const det = determinant(matrix2x2);
  
  if(det !== 0){
    const detX = determinant(changeElem(matrix2x2, 0, b));
    const detY = determinant(changeElem(matrix2x2, 1, b));
    return [(detX / det), (detY / det)]
  }
}

// Example
console.log(solveSimultaneous([[2,6,38],[15,-2,144]]) , [10,3])
console.log(solveSimultaneous([[1,1,20],[1,-1,2]]), [11, 9])
console.log(solveSimultaneous([[1,2,18],[3,-1,5]]), [4, 7])