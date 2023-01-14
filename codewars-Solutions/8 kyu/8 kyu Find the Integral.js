function integrate(coefficient, exponent) {
    /**
          /\               n+1
         |     n         x 
         |   x   dx =  -----    + Constant
         |              n + 1
       \/
    **/
    
    return `${coefficient /(exponent + 1)}x^${exponent + 1}`
  }