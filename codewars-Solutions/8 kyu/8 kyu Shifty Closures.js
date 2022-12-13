let name1 = 'Abe';
var greet_abe = function () {
    return "Hello, " + name1 + '!';
};
var greet_ben = function () {
    name1 = 'Ben';
    return "Hello, " + name1 + '!';
};



console.log(greet_abe(), 'Hello, Abe!', 'greet_abe() is not greeting Abe');
console.log(greet_ben(), 'Hello, Ben!', 'greet_ben() is not greeting Ben');