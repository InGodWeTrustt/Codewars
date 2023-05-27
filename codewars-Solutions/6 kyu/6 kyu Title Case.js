function titleCase(title, minorWords) {
    if (!title) {
        return "";
    }

    if (!minorWords) {
        minorWords = "";
    }

    const words = title.toLowerCase().split(" ");
    const exceptions = minorWords.toLowerCase().split(" ");
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (i === 0 || exceptions.indexOf(word) === -1) {
            words[i] = word.charAt(0).toUpperCase() + word.slice(1);
        }
    }
    return words.join(" ");
}


console.log(titleCase(''), '')
console.log(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings')
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows')
console.log(titleCase('the quick brown fox'), 'The Quick Brown Fox')