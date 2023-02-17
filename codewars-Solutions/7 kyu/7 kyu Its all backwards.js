function flipper(stringArr) {
    return stringArr
        .reverse()
        .map(word => word.length > 1
            ? `${word.slice(0, -1).toLowerCase()}${word.slice(-1).toUpperCase()}`
            : word)
        .join(' ')
}

console.log( flipper(['This', 'Is', 'A', 'Test'])  === "tesT A iS thiS" );
console.log( flipper(['This', 'Is', 'a', 'Test']) ===  "tesT a iS thiS" );