function wordSearch(word, text) {
    return new RegExp(`\\b${word}\\b`).test(text)
}


// Example
const myText = "what makes the desert beautiful, said the little prince is that somewhere it hides a well";
console.log(wordSearch("desert", myText), true);
console.log(wordSearch("blue", myText), false);
console.log(wordSearch("well", myText), true);
console.log(wordSearch("house", myText), false);
console.log(wordSearch("beautiful", myText), true);
console.log(wordSearch("prince", myText), true);
console.log(wordSearch("le prince", myText), false); 