function validateHello(str) {
    const greetings = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc'];
    for (let i = 0; i < greetings.length; i++) {
        if (str.toLowerCase().includes(greetings[i])) {
            return true;
        }
    }
    return false;
}

console.log(validateHello('hello') === true);
console.log(validateHello('ciao') === true);
console.log(validateHello('salut') === true);
console.log(validateHello('hallo') === true);
console.log(validateHello('hola') === true);
console.log(validateHello('ahoj') === true);
console.log(validateHello('czesc') === true);
console.log(validateHello('meh') === false);
console.log(validateHello('Ahoj') === true);