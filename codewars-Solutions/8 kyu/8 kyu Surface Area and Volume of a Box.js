function getSize(width, height, depth) {

    // S = 2 (wh + wd + hd) - cuboid
    const area = 2 * (width * height + width * depth + height * depth);
    // V = S * h = w * d * h;
    const volume = width * depth * height;
    return [area, volume]
}

// Example
console.log(getSize(4, 2, 6), [88, 48]);
console.log(getSize(10, 10, 10), [600, 1000]);
console.log(getSize(4, 2, 6)[0] === 88);
console.log(getSize(4, 2, 6)[1] === 48);
