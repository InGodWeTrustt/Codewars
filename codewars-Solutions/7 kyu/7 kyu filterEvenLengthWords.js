function filterEvenLengthWords(words) {
    return words.filter(w => w.length % 2 === 0)
}


console.log(filterEvenLengthWords(['One', 'Two', 'Three', 'Four']).length === 1);