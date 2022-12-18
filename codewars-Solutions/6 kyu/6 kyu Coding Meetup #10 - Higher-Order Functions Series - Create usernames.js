const surname = (firstName, lastName) => {
    return `${firstName.toLowerCase()}${lastName[0].toLowerCase()}`
}

const getYear = (age) => new Date().getFullYear() - age;

function addUsername(list) {
    list.forEach(developer => {
        const { age, firstName, lastName } = developer;
        developer.username = `${surname(firstName, lastName)}${getYear(age)}`
        return developer
    })

    return list
}
