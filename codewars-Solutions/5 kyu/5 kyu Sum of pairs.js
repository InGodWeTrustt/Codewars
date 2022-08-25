/**
 * sum_pairs([4, 3, 2, 3, 4],         6)
          ^-----^         4 + 2 = 6, indices: 0, 2 *
             ^-----^      3 + 3 = 6, indices: 1, 3
                ^-----^   2 + 4 = 6, indices: 2, 4
  * the correct answer is the pair whose second value has the smallest index
== [4, 2]
 */


/**
 * @param {*number} ints 
 * @param {*number} s 
 * @returns 
 */

function sumPairs(ints, s) {
    if (ints.length < 2) return undefined;
    const set = new Set()
    set.add(ints[0]) // добавляем первый элемент в набор
    for (let i = 1; i < ints.length; i++) {
        let needed = s - ints[i];
        if (set.has(needed)) {
            return [needed, ints[i]]
        }
        set.add(ints[i])
    }
    return undefined;
}

console.log(sumPairs([4, 3, 2, 3, 7], 6)); // [4,2]


// Взято с codewars
var sum_pairs = function (ints, s) {
    var seen = {}
    for (var i = 0; i < ints.length; ++i) {
        if (seen[s - ints[i]]) return [s - ints[i], ints[i]];
        seen[ints[i]] = true
    }
}

debugger
console.log(sumPairs([4, 3, 2, 3, 7], 6)); // [4,2]