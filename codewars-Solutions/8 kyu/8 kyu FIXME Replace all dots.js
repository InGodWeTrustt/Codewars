var replaceDots = function (str) {
    return str.replace(/[.]/g, '-');
}

// Example
console.log(replaceDots("one.two.three"), "one-two-three");