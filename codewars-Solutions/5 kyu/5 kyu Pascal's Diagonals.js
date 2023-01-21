function generateDiagonal(n, l) {
    /*
          k        n!
        C     = --------
          n      k!(n-k)!
    
    trianglePascal
       
  k = 0, 1, 2..
  
  n = 0                    C00 = 1
  n = 1             C10 = 1      C11 = 1
  n = 2      C20 = 1       C21 = 2       C22 = 2
  n = 3   C30 = 1    C31 = 3       C32 = 3     C33 = 1
         .............................................
    */

    // first diagonal -> C00 C11 C22 C33 C44 ...
    // second diagonal -> C10 C11 C12 C13 C14 ...
    // thrid diagonal -> C20 C31 C32 C33 C34 ...
    // we see that third diagonal  n = 2, 3, ...
    //                             k = 0,1,2...

    const res = [];

    for (let k = 0, diag = n; k < l; k++, diag++) {
        const binomialcoeff = factorial(diag) / (factorial(k) * factorial(diag - k));
        res.push(binomialcoeff);
    }

    return res;
}


function factorial(n) {
    let factorial = 1;

    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }

    return factorial;
}


console.log(generateDiagonal(2, 5), [1, 3, 6, 10, 15]);