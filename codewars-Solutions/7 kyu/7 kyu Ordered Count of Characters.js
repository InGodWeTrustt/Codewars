const orderedCount = function (text) {
    const map = new Map();

    for (let i = 0; i < text.length; i++) {
        if (map.has(text[i])) { // if the collection already contains the letter
            map.set(text[i], map.get(text[i]) + 1);
        } else {
            map.set(text[i], 1)
        }
    }

    return [...map];
}

// Example
console.log(orderedCount("abracadabra")) // [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]


