// Исключаем все числа, связанные с 5 и возвращаем количество цифр
function dontGiveMeFive(start, end) {
    let count = 0;
    for(let i = start; i <= end; i++){
        if(String(i).indexOf('5') !==-1) {
            continue;
        } else count++;
    }
    return count;
}

console.log(dontGiveMeFive(1,9));
console.log(dontGiveMeFive(4,17));