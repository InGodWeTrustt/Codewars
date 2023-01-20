class Dictionary {
    constructor(arr){
        this.dictionary = arr
    }

    getMatchingWords(str){
        // I want to replace the question mark ('?'), if there is one, with a letter pattern
        // [a-z]
        const replaceQuestionChar = str.replace(/\?/gi, '[a-z]');

        // i - ignorecase, ^ - start word, $ - end word
        const regex = new RegExp(`^${replaceQuestionChar}$`, 'i')
        return this.dictionary.filter(word => regex.test(word));
    }
}




var fruits = new Dictionary(['banana', 'apple', 'papaya', 'cherry']);
console.log(fruits.getMatchingWords('lemon'));     // must return []
console.log(fruits.getMatchingWords('cherr??'));   // must return []
console.log(fruits.getMatchingWords('?a?a?a'));    // must return ['banana', 'papaya']
console.log(fruits.getMatchingWords('??????'));    // must return ['banana', 'papaya', 'cherry']
console.log(fruits.getMatchingWords('?????'));    // must return ['apple']