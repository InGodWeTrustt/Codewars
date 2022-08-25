/**
 * .
.      .  
.      .       .      ---> should return 2.0

.
.      .  
.      .       .     
.      .       .      .      ---> should return 4.5
 */


function tArea(tStr) {
    const triangle = tStr
    .split('\n')
    .map( elem => elem.replace(/\s/gi, ''))
    .filter(x => x)

    const height = triangle.length-1;
    const base = triangle[triangle.length - 1].length-1
    
    return (1 / 2) * base * height;
}

console.log(tArea('\n.\n. .\n')); // 0.5
console.log((tArea('\n.\n. .\n. . .\n. . . .\n. . . . .\n. . . . . .\n. . . . . . .\n. . . . . . . .\n. . . . . . . . .\n'))); //32