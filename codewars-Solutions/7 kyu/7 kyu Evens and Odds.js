function evensAndOdds(num) {
    return num % 2 === 0 ? num.toString(2) : num.toString(16)
}


console.log(evensAndOdds(2), '10');
console.log(evensAndOdds(13), 'd');
console.log(evensAndOdds(47), '2f');
console.log(evensAndOdds(0), '0');