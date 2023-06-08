/**
 * Вам нужно написать регулярное выражение, которое будет проверять пароль, чтобы убедиться, что он соответствует следующим критериям:
 * 
Не менее шести символов
содержит строчную букву
содержит заглавную букву
содержит цифру
содержит только буквенно-цифровые символы (обратите внимание, что '_'это не буквенно-цифровые символы)
 */
const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

console.log(REGEXP.test('fjd3IR9'), true);
console.log(REGEXP.test('ghdfj32'), false);
console.log(REGEXP.test('DSJKHD23'), false);
console.log(REGEXP.test('dsF43'), false);
console.log(REGEXP.test('4fdg5Fj3'), true);
console.log(REGEXP.test('DHSJdhjsU'), false);
console.log(REGEXP.test('fjd3IR9.;'), false);
console.log(REGEXP.test('fjd3  IR9'), false);
console.log(REGEXP.test('djI38D55'), true);
