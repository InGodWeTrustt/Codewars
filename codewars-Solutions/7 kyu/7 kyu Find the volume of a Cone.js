function volume(r, h) {
    /**
     *     1            1        2
     * V = - * So * h = - * π * r  * h 
     *     3            3
     *                              2
     * where So - circle area (π * r), h - cone height, r - cone base radius
     */

    return Math.floor((1 / 3) * Math.PI * Math.pow(r, 2) * h)
}

console.log(volume(7, 3)); // 153
console.log(volume(56, 30)); // 98520
console.log(volume(0, 10)); // 0