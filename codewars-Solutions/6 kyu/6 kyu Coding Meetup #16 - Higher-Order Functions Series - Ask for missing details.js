const msg = propName => `Hi, could you please provide your ${propName}.`

function askForMissingDetails(list) {
    return list.map(developer => {
        const [propName, value] = Object.entries(developer).filter(([propName, value]) => Object.is(value, null))[0] || [];
        console.log('value: ', value);

        if (Object.is(value, null)) {
            developer.question = msg(propName)
            return developer
        }
        // else return undefined by default
    })
        .filter(developer => developer)
}

console.log(askForMissingDetails([
    {
        firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
        question: 'Hi, could you please provide your firstName.'
    },
    {
        lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java'
    }
]));
