function buildRowText(idx, character) {
    let i = 1;
    return '| | | | | | | | | |'.replace(/\s+/g, (char, k) => {
        // k = 1,3,5,7 (odd)
        if (k - i === idx) {
            // we have found a place to insert
            return character;
        } else {
            i++;
            return char;
        }
    })
}

console.log(buildRowText(2, 'A') === '| | |A| | | | | | |');
console.log(buildRowText(0, 'A') ===  '|A| | | | | | | | |');
console.log(buildRowText(8, 'A') ===  '| | | | | | | | |A|');