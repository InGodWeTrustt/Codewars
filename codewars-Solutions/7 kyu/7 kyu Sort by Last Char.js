function last(x) {
    return x.split(' ').sort((a, b) => a.at(-1).localeCompare(b.at(-1)))
}


// Example
console.log(last('man i need a taxi up to ubud')); //  ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up'])
console.log(last('what time are we climbing up the volcano')); //  ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what'])
console.log(last('take me to semynak')); //  ['take', 'me', 'semynak', 'to'])