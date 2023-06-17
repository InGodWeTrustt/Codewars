function isValidIP(str) {
    const octets = str.split('.');
    if (octets.length !== 4) {
        return false;
    }
    for (let i = 0; i < 4; i++) {
        const octet = parseInt(octets[i]);
        if (isNaN(octet) || octet < 0 || octet > 255 || (octet.toString() !== octets[i])) {
            return false;
        }
    }
    return true;
}

console.log(isValidIP('abc.def.ghi.jkl'), false);
console.log(isValidIP('123.456.789.0'), false);
console.log(isValidIP('12.34.56'), false);
console.log(isValidIP('01.02.03.04'), false);
console.log(isValidIP('256.1.2.3'), false);
console.log(isValidIP('255.255.255.255'), true);