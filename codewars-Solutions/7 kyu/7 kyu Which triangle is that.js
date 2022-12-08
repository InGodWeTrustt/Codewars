var typeOfTriangle = function (...args) {
    const [sideA, sideB, sideC] = args
    const typeTriangle = ['Equilateral', 'Scalene', 'Isosceles', 'Not a valid triangle'];

    if (!args.every(arg => typeof arg === 'number') || (sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA)) {
        return typeTriangle[typeTriangle.length - 1]
    } else if (args.every( side => sideA === side)) {
        return typeTriangle[0]
    } else if (sideA === sideB || sideB === sideC || sideA === sideC) {
        return typeTriangle[2]
    } else {
        return typeTriangle[1]
    }
}

console.log(typeOfTriangle(1,1,1), "Isosceles");
