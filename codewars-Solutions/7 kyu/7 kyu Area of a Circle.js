/**
        circleArea(-1485.86);    //returns false
        circleArea(0);           //returns false
        circleArea(43.2673);     //returns 5881.25
        circleArea(68);          //returns 14526.72
        circleArea("number");    //returns false
 */

var circleArea = function (radius) {
    if (typeof radius !== 'number' || radius <= 0) {
        return false;
    }

     /**
     *             2
     *  S =  π x r 
     */
    return +(Math.PI * Math.pow(radius, 2)).toFixed(2)
};


console.log(circleArea(-1485.86))    //returns false
console.log(circleArea(0))           //returns false
console.log(circleArea(43.2673))     //returns 5881.25
console.log(circleArea(68))          //returns 14526.72
console.log(circleArea("number"))    //returns false