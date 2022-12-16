const curry = () => {
    let res = [];

    return function inner(string) {
        if (typeof string === 'undefined') {
            const copy = [...res].join(' ');
            // delete all elements in array
            res.length = 0;
            return copy;
        } else {
            res.push(string)
            return inner
        }
    }
}

const createMessage = curry()


console.log(createMessage("Hello")("World!")("how")("are")("you?")()) // "Hello World! how are you?"
console.log(createMessage("Hello")("World!")()) // 