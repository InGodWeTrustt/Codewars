/**
 * @param {string} text input string
 * @return {number} count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string
 */
function duplicateCount(text) {
    const map = {}
    for(const char of text.toLowerCase()){
        map[char] ? map[char]++ : map[char] = 1
    }
   return  Object.entries(map).filter(([k, v]) => v > 1).length
}