function countConsonants(str) {
   const vowels = ["a", "e", "i", "o", "u"];

   const consonantsWithDuplicate = str.toLowerCase().split('').filter(char => !vowels.includes(char) && /[a-z]/gi.test(char));

   return new Set(consonantsWithDuplicate).size
}

console.log(countConsonants('add')); // 1
console.log(countConsonants('sillystring')); // 7
console.log(countConsonants('Count my unique consonants!!')); // 7