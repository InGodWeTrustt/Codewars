function greetDevelopers(list) {
    return list.map(developer => {
        const { firstName, language } = developer;
        return {
            greeting: `Hi ${firstName}, what do you like the most about ${language}?`,
            ...developer
        }
    })
}