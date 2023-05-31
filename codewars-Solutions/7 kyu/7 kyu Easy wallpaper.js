// preloaded 
const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve","thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];

function wallpaper(l, w, h) {
    if (l === 0 || w === 0) return 'zero';
    const perimeter = 2 * (l + w);
    const area = perimeter * h;
    const paper_needed = area * 1.15;
    const rolls = Math.ceil(paper_needed / (0.52 * 10));
    return numbers[rolls];
}

// Примеры тестов
console.log(wallpaper(6.3, 4.5, 3.29) === "sixteen");
console.log(wallpaper(7.8, 2.9, 3.29) === "sixteen");
console.log(wallpaper(6.3, 5.8, 3.13) === "seventeen");
console.log(wallpaper(6.1, 6.7, 2.81) === "sixteen");
console.log(wallpaper(6.1, 2.0, 3.15) === "twelve");
console.log(wallpaper(4.4, 3.0, 2.75) === "ten");
console.log(wallpaper(6.1, 6.7, 2.81) === "sixteen");
console.log(wallpaper(0, 2.6, 3.32) === "zero");
console.log(wallpaper(4.7, 0, 3.32) === "zero");
console.log(wallpaper(7.4, 1.3, 2.29) === "nine");
console.log(wallpaper(6.6, 1.3, 3.29) === "twelve");
console.log(wallpaper(4.1, 3.3, 3.32) === "eleven");
console.log(wallpaper(0, 5.6, 3.20) === "zero");
console.log(wallpaper(7.9, 5.4, 3.33) === "twenty");
console.log(wallpaper(7.9, 5.4, 0) === "zero");