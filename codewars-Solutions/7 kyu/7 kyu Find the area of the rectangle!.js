/**
 * 
 * @param {*} d diameter rectangle
 * @param {*} l  one og the side rectangle
 * @returns area of rectangle
 */
function area(d,l){
    if(d <= l) return 'Not a rectangle';
    const anotherSide = Math.sqrt(d**2-l**2);
    return Math.round(anotherSide*l*100)/100
  }


  console.log(area(12,5)); // 54.54