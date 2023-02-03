function remove(string) {
    return string.replace(/!+$/g, '');
}

console.log(remove("Hi!!!", "Hi"))
console.log(remove("!Hi", "!Hi"))
console.log(remove("!Hi!", "!Hi"))
console.log(remove("Hi! Hi!", "Hi! Hi"))