function firstNonRepeated(s) {
    let res;

    [...s].every((elem, i, arr) => {
        if (arr.indexOf(elem) === arr.lastIndexOf(elem)) {
            res = elem;
            return false;
        } else {
            return true;
        }
    })

    return res || null;
}

console.log(firstNonRepeated("test"), 'e');
console.log(firstNonRepeated("teeter"), 'r');
console.log(firstNonRepeated("1122321235121222"), '5');
console.log(firstNonRepeated("rend"), 'r');