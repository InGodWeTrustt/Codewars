const toDegrees = rad => rad * (180 / Math.PI);
const getSectorNumberFromAngle = (sectorAngle, curtAngle) => Math.round(curtAngle / sectorAngle);

function getDartboardScore(x, y) {
  // By the Pythagorean theorem
  /** O(0,0), A(x, y)
          A
         /|
        / |
       /  | y             AB      y                OB        x              sina    y
      /   |       sina = --- = --------  ;  cosa = --- = --------- ; tga = ----- = ---  
     /    |               OA    _______            OA     _______           cosa    x
    /     |                   \/y^2+x^2                 \/y^2+x^2
   /      |                     
  /       |
 / a      |                 a = arctg(y / x)
/_________| 
O    x    B
  */
  const radius = Math.sqrt(x ** 2 + y ** 2);
  const diameter = 2 * radius;

  if (diameter > 340) return 'X';
  if (diameter <= 12.7) return 'DB';
  if (diameter <= 31.8) return 'SB';


  // degress ->   0  18  36 54 ...                                                   354
  const points = [6, 13, 4, 18, 1, 20, 5, 12, 9, 14, 11, 8, 16, 7, 19, 3, 17, 2, 15, 10];

  // 1 sector is equal to 18 degrees (360 / 20 = 18)
  const sectorAngle = 360 / points.length;
  let curAngle = toDegrees(Math.atan2(y, x));

  if(curAngle < 0){
    //third or fourth quarter of a circle
    curAngle += 360;
  }

  const sectorNumber = getSectorNumberFromAngle(sectorAngle, curAngle);

  const score = points[sectorNumber] || points[0];
  if (diameter > 324 && diameter < 340) {
    return `D${score}`
  } else if (diameter > 198 && diameter < 214) {
    return `T${score}`
  }

  return score+''
}

// Example
console.log(getDartboardScore(-133.69, -147.38), "X");
console.log(getDartboardScore(4.06, 0.71), "DB");
console.log(getDartboardScore(2.38, -6.06), "SB");
console.log(getDartboardScore(-5.43, 117.95), "20");
console.log(getDartboardScore(-73.905, -95.94), "7");
console.log(getDartboardScore(55.53, -87.95), "T2");
console.log(getDartboardScore(-145.19, 86.53), "D9");
console.log(getDartboardScore(126.55719744680817, -1.2072320766757798), '6');