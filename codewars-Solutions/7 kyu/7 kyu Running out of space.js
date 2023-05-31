function spacey(arr) {
    let temp = "";
    const result = [];

    for (var i = 0; i < arr.length; i++) {
        temp += arr[i];
        result.push(temp);
    }

    return result;
}

// Примеры тестов
console.log(JSON.stringify(spacey(['kevin', 'has','no','space'])) === JSON.stringify([ 'kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace']));
console.log(JSON.stringify(spacey(['this','cheese','has','no','holes'])) === JSON.stringify(['this','thischeese','thischeesehas','thischeesehasno','thischeesehasnoholes']));