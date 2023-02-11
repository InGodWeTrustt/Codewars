function youAreACube(value) {
    return Number.isInteger(Math.cbrt(value));
}

/** Explanation
     
                2        3
   V = S * h = a  * a = a
   where V -  Volume of a Cube
         S - area of ​​a square because the base is a square (a * a)
         a - side length of the cube

               ______
            3 /\  /
  Then, a = \/  \/
 **/ 


// Example
console.log(youAreACube(27), true);
console.log(youAreACube(1), true);
console.log(youAreACube(2), false);
console.log(youAreACube(99), false);
console.log(youAreACube(64), true); 