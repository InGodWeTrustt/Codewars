/**
 * cap is the amount of people the bus can hold excluding the driver.
 * on is the number of people on the bus excluding the driver.
 * wait is the number of people waiting to get on to the bus excluding the driver.
 */

function enough(cap, on, wait) {
    let calc = on + wait - cap 
    return calc < 0 ?  0 :  calc
}


console.log(enough(10, 5, 5), 0);
console.log(enough(100, 60, 50), 10);
console.log(enough(20, 5, 5), 0);