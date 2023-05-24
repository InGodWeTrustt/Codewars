function minimumPerimeter(area) {
    let minPer = Infinity;
    for (let i = 1; i <= Math.sqrt(area); i++) {
        if (area % i === 0) {
            let j = area / i;
            if (Number.isInteger(j)) {
                let perimeter = 2 * (i + j);
                if (perimeter < minPer) {
                    minPer = perimeter;
                }
            }
        }
    }
    return minPer;
}

console.log(minimumPerimeter(45)); // 28