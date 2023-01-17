function correct(string) {
    const mistakes = {
        0 : 'O',
        1 : 'I',
        5 : 'S'
    };

    return [...string].map(char => mistakes[char] || char).join('')
}