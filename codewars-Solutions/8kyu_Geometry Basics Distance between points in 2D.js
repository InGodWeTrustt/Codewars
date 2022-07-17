/**
 * function calculating distance between Point a and Point b.
 * @param {*} a Point a
 * @param {*} b Point b
 */

function distanceBetweenPoints(a, b) {
    const deltaX = a.x - b.x;
    const deltaY = a.y - b.y;
    return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
}


// class Point {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y
//     }
// }

console.log(distanceBetweenPoints(new Point(1, 6), new Point(4, 2))); //5