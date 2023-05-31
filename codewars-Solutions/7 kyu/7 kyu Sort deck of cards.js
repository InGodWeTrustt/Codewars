function sortCards(cards) {
    const rankValues = { 'A': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, 'T': 10, 'J': 11, 'Q': 12, 'K': 13 };
    const sortedCards = cards.sort((a, b) => rankValues[a] - rankValues[b]);
    return sortedCards;
}

// Примеры тестов
console.log(sortCards([3,9,"A",5,"T",8,2,4,"Q",7,"J",6,"K"]).toString() === ["A",2,3,4,5,6,7,8,9,"T","J","Q","K"].toString());
console.log(sortCards(["J","J",2,"T",9,6]).toString() === [2,6,9,"T","J","J"].toString());
console.log(sortCards(["A",2,3,4,5,6,6,7,8,9,"T","J","Q","A"]).toString() === ['A', 'A', 2, 3, 4, 5, 6, 6, 7, 8, 9, 'T', 'J', 'Q'].toString());
console.log(sortCards([]).toString() === [].toString());
console.log(sortCards([2,4,5,6,7,9,"A"]).toString() === ["A",2,4,5,6,7,9].toString());
console.log(sortCards(["Q","K","T","A","J"]).toString() === ["A","T","J","Q","K"].toString());
console.log(sortCards([3,"Q",2,"T","J","J","J",8,9,2,2,6]).toString() === [2,2,2,3,6,8,9,"T","J","J","J","Q"].toString());
console.log(sortCards([2,3,4,5,6,7,8,9]).toString() === [2,3,4,5,6,7,8,9].toString());
console.log(sortCards([2]).toString() === [2].toString());
console.log(sortCards(["T","Q",2,"K",6,6,5]).toString() === [2,5,6,6,"T","Q","K"].toString());