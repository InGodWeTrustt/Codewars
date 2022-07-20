const square = num => num ** 2

function distanceBetweenPoints(a, b) {
    const deltaX = a.x - b.x,
        deltaY = a.y - b.y,
        deltaZ = a.z - b.z;
    const distance = Math.sqrt(square(deltaX) + square(deltaY) + square(deltaZ));
    return distance;
}

class Point {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

