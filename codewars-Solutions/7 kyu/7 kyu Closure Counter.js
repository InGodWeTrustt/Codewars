function counter() {
    let count = 0;
    function inner() {
        count++
        return count
    }
    return inner
}

let counterFn = counter()
console.log(counterFn());