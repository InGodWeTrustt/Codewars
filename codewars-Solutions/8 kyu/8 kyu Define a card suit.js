function defineSuit(card) {
    const suits = {
        '♣': 'clubs',
        '♦': 'diamonds',
        '♥': 'hearts',
        '♠': 'spades'
    };
    return suits[card[card.length - 1]]
}

// Example
console.log(defineSuit('Q♠') === 'spades');
console.log(defineSuit('9♦') === 'diamonds');
console.log(defineSuit('J♥') === 'hearts');