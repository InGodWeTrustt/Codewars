function reverseMessage(str) {
    if (!str.length) return '';

    return str
        .split(' ')
        .reverse()
        .map(word => {
            let res = word.split('').reverse().join('');
            return (res[0] || '').toUpperCase() + res.slice(1).toLowerCase()
        }).join(' ')
}

console.log(reverseMessage('Reverse this message!') === '!egassem Siht Esrever')
console.log(reverseMessage('Today is the 14th of January!') === '!yraunaj Fo Ht41 Eht Si Yadot')
console.log(reverseMessage('hty56hA T76#Td') === 'Dt#67t Ah65yth')
console.log(reverseMessage('') === '')