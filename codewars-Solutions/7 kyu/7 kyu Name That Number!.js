function nameThatNumber(num) {
    const map = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety"
    };

    if(num < 20){
        return map[num]
    }
  
    const remainder = num % 10;
    const roundNum = num - remainder;
    return `${map[roundNum]} ${remainder > 0 ? map[remainder] : ''}`.trim()
}


// Example
console.log(nameThatNumber(1)); // one
console.log(nameThatNumber(19)); // nineteen
console.log(nameThatNumber(29)); // twenty nine
console.log(nameThatNumber(30)); // thirty
console.log(nameThatNumber(54)); // fifty four