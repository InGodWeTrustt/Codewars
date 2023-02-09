const prevMultOfThree = n => {
    let res = null;
    let copy = n.toString();

    while (copy.length) {
        if (copy % 3 === 0) {
            res = +copy; // +n - convert to Number
            break;
        } else {
            copy = copy.slice(0, -1) // delete last char
        }
    }

    return res;
}

// Example
const answer = [null, null, 36, 12, 9];
[1, 25, 36, 1244, 952406].forEach((q, i) => console.log(prevMultOfThree(q) === answer[i]));