const toWeirdCase = string => {
    let k = 0;
    return string
        .split('') 
        .map(char => {
            // это пробел
            if(char.codePointAt() === 32){
                k = 0; // обнуляю счетчик
                return char; // возвращаю сам пробел
            }
            // если индекс символа четный, то сделат его прописным
            if(k % 2 === 0){
                k++;
                return char.toUpperCase();
            } else { // иначе в нижний регистр
                k++;
                return char.toLowerCase()
            }
        })
        .join('');
}

console.log(toWeirdCase('This')); //ThIs
console.log(toWeirdCase('This is a test')); //ThIs iS A TeSt