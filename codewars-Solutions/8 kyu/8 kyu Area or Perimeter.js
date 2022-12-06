/**
 * all sides of a square are equal (1)
 * ...
 * . .
 * ...
 * opposite sides of a rectangle are equal (AB=CD, BC=AD) (2)
 * B ...... C 
 *   .    .
 * A ...... D
 * 
 */
const areaOrPerimeter = function (l, w) {
    if (l === w) {
        // square, because see (1)
        const areaSquare = l ** 2;
        return areaSquare;
    } else {
        // reactangle
        // Perimeter -> AB+BC+CD+AD = 2(AB+BC) or 2(CD+AD)
        const perRect = 2 * (l + w)
        return perRect
    }
};

console.log(areaOrPerimeter(3, 3), 9);
console.log(areaOrPerimeter(6, 10), 32);