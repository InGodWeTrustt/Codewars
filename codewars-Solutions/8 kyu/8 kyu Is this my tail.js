function correctTail(body, tail) {
    const sub = body.substr(body.length - (tail.length));
    if (sub === tail) {
        return true;
    }
    else {
        return false;
    }
}

console.log(correctTail("Fox", "x"), true);
console.log(correctTail("Rhino", "o"), true);
console.log(correctTail("Meerkat", "t"), true);
console.log(correctTail("Emu", "t"), false);
console.log(correctTail("Badger", "s"), false);
console.log(correctTail("Giraffe", "d"), false);