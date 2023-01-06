function aliasGen(fn, sn) {
    if (/[0-9]/g.test(`${fn[0]+sn[0]}`)) {
        return "Your name must start with a letter from A - Z."
    } else {
        const firstLetterFn = fn[0].toUpperCase()
        const firstLetterSn = sn[0].toUpperCase()
        return `${firstName[firstLetterFn]} ${surname[firstLetterSn]}`
    }
}

console.log(aliasGen("Mike", "Millington"), "Malware Mike");
console.log(aliasGen("Fahima", "Tash"), "Function T-Rex");
console.log(aliasGen("Daisy", "Petrovic"), "Data Payload");
console.log(aliasGen("7393424", "Anumbha"), "Your name must start with a letter from A - Z.");
console.log(aliasGen("Anuddanumbha", "23200"), "Your name must start with a letter from A - Z.");

// const firstName = {
//     A: 'Alpha',
//     B: 'Beta',
//     C: 'Cache',
//     D: 'Data',
//     E: 'Energy',
//     F: 'Function',
//     G: 'Glitch',
//     H: 'Half-life',
//     I: 'Ice',
//     J: 'Java',
//     K: 'Keystroke',
//     L: 'Logic',
//     M: 'Malware',
//     N: 'Nagware',
//     O: 'OS',
//     P: 'Phishing',
//     Q: 'Quantum',
//     R: 'RAD',
//     S: 'Strike',
//     T: 'Trojan',
//     U: 'Ultraviolet',
//     V: 'Vanilla',
//     W: 'WiFi',
//     X: 'Xerox',
//     Y: 'Y',
//     Z: 'Zero'
// }
// const surname = {
//     A: 'Analogue',
//     B: 'Bomb',
//     C: 'Catalyst',
//     D: 'Discharge',
//     E: 'Electron',
//     F: 'Faraday',
//     G: 'Gig',
//     H: 'Hacker',
//     I: 'IP',
//     J: 'Jabber',
//     K: 'Killer',
//     L: 'Lazer',
//     M: 'Mike',
//     N: 'n00b',
//     O: 'Overclock',
//     P: 'Payload',
//     Q: 'Quark',
//     R: 'Roy',
//     S: 'Spy',
//     T: 'T-Rex',
//     U: 'Unit',
//     V: 'Virus',
//     W: 'Worm',
//     X: 'X',
//     Y: 'Yob',
//     Z: 'Zombie'
// }
