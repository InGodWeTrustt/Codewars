function solveQuadratic(a, b, c) {
    if(a === 0 && b === 0 && c === 0) return;
    if(a === 0 && b !==0){
      // y = bx + c - linear
      if(c === 0) return 0;
      return - c/ b
    } else if(a !== 0 && b !== 0){
      const D = b ** 2 - 4 * a * c;
      
      if(D < 0) return;
      if(D == 0){
        return [-b / (2*a)]
      }
      // D > 0
      const sqrtD = D ** (1/2);
      const x1 = (-b + sqrtD) / (2*a);
      const x2 = (-b - sqrtD) / (2*a);
      return [x1, x2]
    } else if(a !== 0 && b === 0 && c === 0){
      return [0];
    }
  }


//Example
console.log(solveQuadratic(2, 4, -6)); // [1,-3]