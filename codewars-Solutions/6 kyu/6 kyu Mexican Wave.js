

function wave(str) {
    const res = [...str].map((char, i) => {
        const charToUpper = char.toUpperCase()
        return i === 0
            ? `${charToUpper}${str.slice(1)}` // example, 'hello'.slice(1) = 'ello'
            : `${str.slice(0,i)}${charToUpper}${str.slice(i+1)}` // h-str.slice(0,i) E-charToUpper llo-str.slice(i+1) its example
    }).filter( elem => !elem.includes(str)) // чтоб удалить строку, где я пытался возвести в верхний регистр пробел 

    return res
}


let result = ["Hello", "hEllo", "heLlo", "helLo", "hellO"];
console.log(wave("hello"), result, "Should return: '" + result + "'");

result = ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"];
console.log(wave("two words"), result, "Should return: '" + result + "'");