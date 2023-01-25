/**
 * Your task is to make all words which are 3 characters or less into capitals.
 *  You should also remove any vowels from 'long' (4 characters or more) words.
 */

// /[aeiou]/.test(char)

function smallWordHelper(sentence){
    return sentence.split(' ').map(word => {
        if(word.length <= 3){
            return word.toUpperCase();
        } else{
            return word.replace(/[aeiou]/gi, '')
        }
    }).join(' ')
}


console.log(smallWordHelper("The quick brown fox jumps over the lazy dog")); // "THE qck brwn FOX jmps vr THE lzy DOG"
  
console.log(smallWordHelper("I'm just a small word from a small word family")); // "I'M jst A smll wrd frm A smll wrd fmly"