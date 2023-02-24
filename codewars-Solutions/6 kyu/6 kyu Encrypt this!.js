var encryptThis = function (text) {
    return text.split(' ').map(word => {
        const asci = '' + word[0].codePointAt();
        if (word.length > 2) {
            return `${asci}${word.slice(-1)}${word.slice(2, -1)}${word[1]}`
        } else {
            return asci + word.slice(1)
        }
    }).join(' ')
}


// Example
console.log(encryptThis("A") === "65");
console.log(encryptThis("A wise old owl lived in an oak") === "65 119esi 111dl 111lw 108dvei 105n 97n 111ka");
console.log(encryptThis("Why can we not all be like that wise old bird") === "87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri");