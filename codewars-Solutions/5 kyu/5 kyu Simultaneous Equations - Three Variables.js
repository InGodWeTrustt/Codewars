function solveEq(eq) {
    // Solving systems of linear equations by Cramer's method
    /*
    a11 * x + a12 * y + a13 * z = b1;
    a21 * x + a22 * y + a23 * z = b2;
    a31 * x + a32 * y + a33 * z = b3;      
    
      |a11 a12 a13|
  Δ = |a21 a22 a23| = a11*(a22*a33 - a32*a23) - a12*(a21*a33 + a31*a23) + a13*(a21*a32 - a31*a23)
      |a31 a32 a33|
    
    
          |b1 a12 a13|           |a11 b1 a13|        |a11 a12 b1|
     Δx = |b2 a22 a23|;     Δy = |a21 b2 a23|;  Δz = |a21 a22 b2|
          |b3 a32 a33|           |a31 b3 a33|        |a31 a32 b3|
    
         Δx          Δy         Δz               
    x = --- ;   y = --- ;  z = --- ;
         Δ           Δ          Δ
    */

    // delete last element in every subArr
    const matrix3x3 = [...eq].map( arr => arr.slice(0, -1));
    const b = [...eq].map(arr => arr[arr.length - 1]);  // [b1, b2, b3]

    const det = determinant(matrix3x3);
    if (det !== 0) {
        const detX = determinant(changeElement(matrix3x3, 0, b));
        const detY = determinant(changeElement(matrix3x3, 1, b));
        const detZ = determinant(changeElement(matrix3x3, 2, b));

        const x = detX / det;
        const y = detY / det;
        const z = detZ / det;

        return [x, y, z]
    }
}

function changeElement(curArr, index, b){
    const copy = JSON.parse(JSON.stringify(curArr));
    copy.forEach((arr, i) => {
       arr[index] = b[i]
    });
    return copy;
}


function determinant(m) {
    let d = 0;
    for (let i = 0; i < 3; i++) {
        let sub = m[i][0] * (m[(i+1)%3][1] * m[(i+2)%3][2] - m[(i+1)%3][2] * m[(i+2)%3][1]);
        d += sub;
    }
    return d;
}

// Example
console.log(solveEq([[4, -3, 1, -10], [2, 1, 3, 0], [-1, 2, -5, 17]])); // [1, 4, -2]