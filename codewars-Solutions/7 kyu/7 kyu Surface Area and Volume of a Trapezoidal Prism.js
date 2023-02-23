function areaVolume(a, b, h, l) {
    const areaTrapez = ((a + b) / 2) * h;
    const sideTrapez = Math.hypot(h, (b - a) / 2);
    const areaRec = l * (a + b + 2 * sideTrapez);
    const totalArea = Math.round(2 * areaTrapez + areaRec);
    const volume = Math.round(areaTrapez * l);
    return [totalArea, volume]
}

// Example
console.log(areaVolume(2, 3, 4, 5), [85, 50]);
console.log(areaVolume(5, 10, 8, 4), [247, 240]);
console.log(areaVolume(5, 7, 3, 15), [311, 270]);