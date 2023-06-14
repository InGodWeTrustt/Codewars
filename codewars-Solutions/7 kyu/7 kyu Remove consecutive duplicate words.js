// Задача состоит в том, чтобы удалить из строки все последовательные повторяющиеся слова, оставив только первые слова. 
function removeConsecutiveDuplicates(str) {
    let words = str.split(' ');
    let result = '';
    let prevWord = '';

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word !== prevWord) {
            result += word + ' ';
            prevWord = word;
        }
    }
    return result.trim();
}

// Тестовые случаи
console.log(removeConsecutiveDuplicates("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta")); //alpha beta gamma delta alpha beta gamma delta