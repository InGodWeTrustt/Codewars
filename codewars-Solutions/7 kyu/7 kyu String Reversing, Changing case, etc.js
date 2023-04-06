function reverseWithinvertCase(str) {
    let res = '';

    for (let i = str.length - 1; i >= 0; i--) {
        const char = str[i];
        if (char === char.toUpperCase()) {
            res += char.toLowerCase();
        } else {
            res += char.toUpperCase();
        }
    }

    return res;
};

const reverse = str => {
    let res = '';

    for (let i = str.length - 1; i >= 0; i--) {
        res += str[i];
    }

    return res;
}

// main function
function reverseAndMirror(s1, s2) {
    const fPart = reverseWithinvertCase(s2);
    const sPart = reverseWithinvertCase(s1);
    const sPartMir = reverse(sPart);
    return `${fPart}@@@${sPart + sPartMir}`
}


const s1 = "FizZ";
const s2 = "buZZ";
console.log(reverseAndMirror(s1,s2) === "zzUB@@@zZIffIZz");