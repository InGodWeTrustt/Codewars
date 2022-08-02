/**
Расположите все в алфавитном порядке, где за заглавными буквами следую прописные, 
то есть "aAbaBb" => "AaaBbb"
 */

function findChildren(dancingBrigade) {
	return dancingBrigade
		.replace(/[a-z]/g, '') // удаляю все строчные буквы
		.split('') // конвертирую строку в массив символов
		.sort((a, b) => a.codePointAt() - b.codePointAt()) // сортирую буквы по возрастанию их кодовых точек
		.map(char => {
			const charLower = char.toLowerCase() // перевожу букву в нижний регистр
			const countofMatches = dancingBrigade.match(new RegExp(charLower, 'g')); // получаю массив из букв, которые соответвуют регулярному выражению
			if (!countofMatches) return char; // если не найдены строчные буквы, то оставить все как есть
			return char + charLower.repeat(countofMatches.length)
		})
		.join('') // превращаю массив в строку
}

// console.log(findChildren('AbaFffBaa'));
console.log(findChildren('beeeEBbC'));