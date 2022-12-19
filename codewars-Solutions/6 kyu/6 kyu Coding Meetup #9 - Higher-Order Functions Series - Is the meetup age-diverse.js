function isAgeDiverse(list) {
    list.sort((a, b) => a.age - b.age);
    const delDuplic = [...new Set(list.map(({ age }) => Math.floor(age / 10) >= 10 ? 10 : Math.floor(age / 10)))];
    return /0?12345678910/.test(delDuplic.join(''))
}

