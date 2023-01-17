const getFirstLastChar = str => `${str[0]}${str.at(-1)}`;

function feast(beast, dish) {
    return getFirstLastChar(beast) === getFirstLastChar(dish)
}

console.log(feast("great blue heron", "garlic naan"), true)
console.log(feast("chickadee", "chocolate cake"), true)
console.log(feast("brown bear", "bear claw"), false)