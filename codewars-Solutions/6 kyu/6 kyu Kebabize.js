function kebabize(str) {
    return str
        .replace(/[^a-z]/gi, '')
        .split(/(?=[A-Z])/)
        .map(word => word.toLowerCase())
        .join('-');
}

console.log(kebabize('myCamelCasedString') === 'my-camel-cased-string');
console.log(kebabize('myCamelHas3Humps') === 'my-camel-has-humps');