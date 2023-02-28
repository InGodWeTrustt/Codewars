const greet = function (name) {
    return `Hello ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`
};

console.log(greet('riley') === 'Hello Riley!');