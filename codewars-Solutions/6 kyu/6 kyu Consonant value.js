/**
 * Функция solve() возвращает наивысшее значение подстрок, состоящих только из согласных букв. 
 * Согласные буквы - это любые буквы алфавита, кроме "aeiou". 
 * Мы присваиваем следующие значения: a = 1, b = 2, c = 3, .... z = 26. 
 * Например, для слова "zodiacs" давайте вычеркнем гласные. Мы получим: "z o d ia cs". 
 * Подстроки, состоящие только из согласных, это: "z", "d" и "cs", 
 * а их значения равны: z = 26, d = 4 и cs = 3 + 19 = 22.
 * Наивысшее значение равно 26.
 */
function solve(s) {
    let consonants = 'bcdfghjklmnpqrstvwxyz';
    let max = 0;
    let current = 0;

    for (let i = 0; i < s.length; i++) {
        if (consonants.includes(s[i])) {
            current += s.charCodeAt(i) - 96;
        } else {
            if (current > max) {
                max = current;
            }
            current = 0;
        }
    }

    if (current > max) {
        max = current;
    }
    return max;
}

// Примеры тестов
console.log(solve("zodiac")); // Expected output: 26
console.log(solve("chruschtschov")); // Expected output: 80
console.log(solve("khrushchev")); // Expected output: 38
console.log(solve("strength")); // Expected output: 57
console.log(solve("catchphrase")); // Expected output: 73
console.log(solve("twelfthstreet")); // Expected output: 103
console.log(solve("mischtschenkoana")); // Expected output: 80
console.log(solve("az")); // Expected output: 26