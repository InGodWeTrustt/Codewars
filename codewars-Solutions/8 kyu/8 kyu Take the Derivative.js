function derive(c, exp) {
    return `${c * exp}x^${exp - 1}`
}


console.log(derive(7,8) === "56x^7");
console.log(derive(5,9) === "45x^8");