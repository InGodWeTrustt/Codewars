/**
 Учитывая строку слов, вам нужно найти слово с наивысшим баллом.
Каждая буква слова оценивается в баллах в соответствии с ее положением в алфавите: a = 1, b = 2, c = 3и т. д.
Вам нужно вернуть слово с наивысшим баллом в виде строки.
Если два слова оцениваются одинаково, верните слово, которое появляется первым в исходной строке.
Все буквы будут строчными, и все входные данные будут действительными.
 */

function high(x){
    const split = x.split(' ').map( word => {
        const sumofNum = [...word].map(elem => elem.codePointAt()-96).reduce((prev, cur) => prev + cur)
        return [word, sumofNum]
    })
    return split.sort((a, b) => b[1]-a[1])[0][0]
}

console.log(high('what time are we climbing up the volcano')); // volcano 