function generateHashtag(str) {
    if (!str.length || !str.replace(/\s+/g, '').length) return false;
    // replace many spaces - ONE SPACE
    // trim() - delete spaces in start and end
    str = '#' + str.trim().replace(/\s+/g, ' ')
        .split(' ')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join('');

  
    return str.length > 140 ? false : str;
}

console.log(generateHashtag(" Hello there thanks for trying my Kata" )); // "#HelloThereThanksForTryingMyKata"
console.log(generateHashtag("    Hello     World   ")); //#HelloWorld