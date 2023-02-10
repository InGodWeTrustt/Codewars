function swap(string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const res = [...string].map(char => vowels.includes(char) ? char.toUpperCase() : char);
    return res.join('')
}

// another solution
// function swap(string) {
//     return string.replace(/[aeiou]/g, char => char.toUpperCase())
// }


console.log(swap("Sunday"), "SUndAy");
console.log(swap("Codewars"), "COdEwArs");
console.log(swap("Monday"), "MOndAy");
console.log(swap("Friday"), "FrIdAy");