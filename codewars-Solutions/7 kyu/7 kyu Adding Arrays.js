function arrAdder(wordArrays) {
    let sentence = '';
    let nextWord = '';

    for (let i = 0; i < wordArrays[0].length; i++) {
        for (let j = 0; j < wordArrays.length; j++) {
            nextWord = wordArrays[j][i];
            if (nextWord === '') {
                break;
            }
            sentence += nextWord;
        }
        sentence += ' ';
    }
    return sentence.trim();
}

console.log(arrAdder([['J','L','L','M'],['u','i','i','a'],['s','v','f','n'],['t','e','e','']]) === "Just Live Life Man");