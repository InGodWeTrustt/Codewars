/**
 * Function that compares two versions
 * @param {string} v1 
 * @param {string} v2 
 * @returns boolean
 */

function compareVersions(v1, v2) {
    let splitV1 = v1.split('.');
    let splitV2 = v2.split('.');
    if (splitV1.length < 3 && splitV2.length < 3) {
        splitV1 = splitV1.map((elem, i) => i > 0 && elem.length < 2 ? `0${elem}` : elem).join('.')
        splitV2 = splitV2.map((elem, i) => i > 0 && elem.length < 2 ? `0${elem}` : elem).join('.')
        return parseFloat(splitV1) >= parseFloat(splitV2)
    }
    return splitV1[0] === splitV2[0] ? compareVersions(splitV1.slice(1).join('.'), splitV2.slice(1).join('.') ) : +splitV1[0] >= +splitV2[0]

}

console.log(compareVersions('124.69.43.6.167', '124.69.136.2')) //false
// console.log(compareVersions('5.144.3.164', '5.144.90.1')) //false
// console.log(compareVersions('10.9', '10.10')); //false
// console.log(compareVersions("10.4.6", "10.4")); // true
// console.log(compareVersions("10.4.9", "10.4.6")); // true
// console.log(compareVersions("10.4", "11")); // false