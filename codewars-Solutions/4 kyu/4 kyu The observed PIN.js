/**
 Клавиатура имеет следующую компоновку:

┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┼───┼───┘
    │ 0 │
    └───┘

    Пример, если цифра 5, мы берем все соседние с ней цифры (по вертикали или горизонтали) и ее саму - 2 4 5 6 8
    Функция возвращает массив всех вариантов наблюдаемого PIN-кода длиной от 1 до 8 цифр
 */


function getPINs(observed) {
    const adjacentDigits = {
        '0': ['0', '8'],
        '1': ['1', '2', '4'],
        '2': ['1', '2', '3', '5'],
        '3': ['2', '3', '6'],
        '4': ['1', '4', '5', '7'],
        '5': ['2', '4', '5', '6', '8'],
        '6': ['3', '5', '6', '9'],
        '7': ['4', '7', '8'],
        '8': ['0', '5', '7', '8', '9'],
        '9': ['6', '8', '9']
    };

    let variations = [''];
    for (let i = 0; i < observed.length; i++) {
        const digit = observed[i];
        const newVariations = [];
        for (let j = 0; j < variations.length; j++) {
            const variation = variations[j];
            const adjacent = adjacentDigits[digit];
            for (let k = 0; k < adjacent.length; k++) {
                newVariations.push(variation + adjacent[k]);
            }
        }
        variations = newVariations;
    }

    return variations;
}

// Примеры тестов
let expectations = {
    "2": ["1", "2", "3", "5"],
    "8": ["5", "7", "8", "9", "0"],
    "0": ["0", "8"],
}

for (let pin in expectations) {
    console.log(getPINs(pin), expectations[pin]);
}