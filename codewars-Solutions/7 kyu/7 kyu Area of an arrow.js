function arrowArea(a,b) {
    const areaSmallRect = a*(b/2); // S = ab/2
    const areaTriangle = (1/2)*(a/2)*(b/2); // S = ab/8 
    return areaSmallRect - 2*areaTriangle; // S = ab/4
  }