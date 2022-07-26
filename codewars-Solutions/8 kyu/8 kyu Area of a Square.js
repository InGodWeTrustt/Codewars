function squareArea(arcLength) {
    // l (arcLength) = 2*π(Math.PI)*R(radius)*alpha(degrees)/360 = 2*π*R*90/360 = π*R/2
    const radius = 2 * arcLength / Math.PI; // its square side
    return +(radius * radius).toFixed(2);
}

console.log(squareArea(2)); // 1.62