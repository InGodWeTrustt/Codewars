function encrypt(text, n) {
    if(Object.is(text, null)) return null;
    if (n < 0 || !text.length) return text;
    if (n < 1) return text;
    let res = ''
    for (let i = 1; i < text.length; i+=2) {
        res += text[i]
    }
    for (let j = 0; j < text.length; j+=2) {
        res += text[j]
    }

    return encrypt(res, --n)
}

function decrypt(encryptedText, n) {
    if(Object.is(encryptedText, null)) return null;
    if (n < 0 || !encryptedText.length) return encryptedText;
    if (n < 1) return encryptedText;
    let res = ''
    let mid = Math.floor(encryptedText.length / 2)
    for (let i = 0, j = mid; j < encryptedText.length; i++, j++) {
        res += encryptedText[j];
        res +=  i < mid ? encryptedText[i] : ''
    }

    return decrypt(res, --n)
}


console.log(encrypt("This is a test!", 1), "hsi  etTi sats!");
console.log(encrypt("012345", 1), "135024");
console.log(encrypt("012345", 2), "304152");


console.log(decrypt('1234567', 1));
console.log(decrypt("hsi  etTi sats!", 1)) //"This is a test!"
console.log(decrypt("s eT ashi tist!", 2)) // "This is a test!"
