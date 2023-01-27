function romanize(cyrillic) {
    const cyrillicMap = {
        а: "a",
        б: "b",
        в: "v",
        г: "g",
        д: "d",
        е: "e",
        ё: "e",
        ж: "zh",
        з: "z",
        и: "i",
        й: "i",
        к: "k",
        л: "l",
        м: "m",
        н: "n",
        о: "o",
        п: "p",
        р: "r",
        с: "s",
        т: "t",
        у: "u",
        ф: "f",
        х: "kh",
        ц: "ts",
        ч: "ch",
        ш: "sh",
        щ: "shch",
        ъ : "ie",
        ы: "y",
        э: "e",
        ю: "iu",
        я: "ia",
    }

    const fullNameToENG = cyrillic.split(' ').map((word, i) => {
        return word.toLowerCase().split('').map((char, i) => {
            if (i === 0) {
                const letters = cyrillicMap[char];
                return letters.length > 1
                    ? `${letters[0].toUpperCase()}${letters.slice(1)}`
                    : letters.toUpperCase()
            } else {
                return cyrillicMap[char]
            }
        }).join('')
    }).join(' ')

    return fullNameToENG
}

// Where are surName? Иван (name) Иванович (patronymic) ФАМИЛИЯ(SURNAME)
// Иванович - is not surname, is patronymic
console.log(romanize("Иван Иванович"), "Ivan Ivanovich");
// Анастасия Иванова - so correct to write on my language -> Anastasiia Ivanova
console.log(romanize("Анастасия Иванова"), "Anastasiia Ivanovа");
// Настя Попова - so correct to write on my language -> Nastia Popova
console.log(romanize("Настя Попова"), "Nastia Popovа");