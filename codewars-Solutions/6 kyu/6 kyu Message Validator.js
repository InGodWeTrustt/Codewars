function isAValidMessage(msg) {
    if (!msg.length) return true;
    let arrayOfNumbers = msg.split(/(\d+)/).filter(x => x.length !== 0);

    if (Number.isNaN(Number(arrayOfNumbers[0]))) {
        return false;
    }
    let isValid = true;
    arrayOfNumbers = arrayOfNumbers.map(elem => Number.isNaN(Number(elem)) ? elem.length : +elem)

    for (let i = 0; i < arrayOfNumbers.length; i += 2) {
        if (arrayOfNumbers[i] !== arrayOfNumbers[i + 1]) {
            isValid = false;
            break;
        } else if (!arrayOfNumbers[i + 1]) {
            isValid = false;
            break;
        }
    }
    return isValid
}


console.log(isAValidMessage('3hey5hello2hi')); // true
console.log(isAValidMessage('4code13hellocodewars')); // true
console.log(isAValidMessage('3hey5hello2hi5')); // false
console.log(isAValidMessage('code4hello5')); // false