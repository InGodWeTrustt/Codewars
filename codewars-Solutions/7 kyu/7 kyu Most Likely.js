function mostLikely(prob1, prob2) {
    let prob1Nums = prob1.split(":");
    let prob2Nums = prob2.split(":");
    let prob1Fraction = prob1Nums[0] / prob1Nums[1];
    let prob2Fraction = prob2Nums[0] / prob2Nums[1];
    return prob1Fraction > prob2Fraction;
}

console.log(mostLikely('1:3','1:2') === false);
console.log(mostLikely('1:2','1:3') === true);
console.log(mostLikely('1:4','1:3') === false);
console.log(mostLikely('1:5','1:4') === false);
console.log(mostLikely('1:5','1:4') === false);