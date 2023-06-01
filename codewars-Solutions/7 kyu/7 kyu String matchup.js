// Учитывая два массива строк, вернуть количество раз,
//  когда каждая строка второго массива появляется в первом массиве.
function solve(a, b) {
    const res = Array.from({ length: b.length }, () => 0);

    for (let i = 0; i < b.length; i++) {
        a.forEach(elem => elem === b[i] ? res[i]++ : '');
    }

    return res;
}

// Примеры тестов
console.log(solve(['abc', 'abc','xyz','abcd','cde'], ['abc', 'cde', 'uap'])); // expected output: [2, 1, 0]
console.log(solve(['abc', 'xyz','abc', 'xyz','cde'], ['abc', 'cde', 'xyz'])); // expected output: [2, 1, 2]
console.log(solve(['quick', 'brown', 'fox', 'is', 'quick'], ['quick', 'abc', 'fox'])); // expected output: [2, 0, 1]