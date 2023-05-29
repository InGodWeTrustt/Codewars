//return price without vat
function excludingVatPrice(price) {
    return price === null ? -1 : +(price / 1.15).toFixed(2);
}

console.log(excludingVatPrice(230) === 200.00); // true
console.log(excludingVatPrice(123) === 106.96); // true
console.log(excludingVatPrice(777) === 675.65); // true
console.log(excludingVatPrice(460) === 400.00); // true