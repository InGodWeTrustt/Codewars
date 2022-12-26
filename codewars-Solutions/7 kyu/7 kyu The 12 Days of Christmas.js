const parseToNumber = str => {
    const regex = /\d+(st|nd|rd|th)?/g;
    const number = str.match(regex)
    if(number){
        return /(st|nd|rd|th)/.test(number) ? parseInt(number)+1 : parseInt(number)
    }
    return 0;
}

const comparator = (a, b) => {
    return parseToNumber(b) - parseToNumber(a)
}
