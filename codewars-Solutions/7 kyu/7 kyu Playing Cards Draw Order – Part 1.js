const draw = (deck) => {
    let drawn = [];
    while (deck.length > 0) {
        drawn.push(deck.shift());
        if (deck.length > 0) {
            deck.push(deck.shift());
        }
    }
    return drawn;
}


// Примеры тестов
const deck = ["KC", "KH", "QC", "KS", "KD", "QH", "QD", "QS"];
console.log(draw([...deck])); // ['KC', 'QC', 'KD','QD', 'KH', 'QH','KS', 'QS']