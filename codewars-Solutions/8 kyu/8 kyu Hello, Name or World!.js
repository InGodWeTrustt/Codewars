/**
 * Возвращает приветственное сообщение
 * @param {string} [name] - имя для приветсвия
 * @returns {string} приветственное сообщение
 */
function hello(name) {
    if (name === undefined || name === "") {
        return "Hello, World!"
    } else {
        return "Hello, " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "!";
    };
}

console.log(hello()); // expected output: "Hello, World!"
console.log(hello("")); // expected output: "Hello, World!"
console.log(hello("jane")); // expected output: "Hello, Jane!"
console.log(hello("JANE")); // expected output: "Hello, Jane!"
console.log(hello("jane doe")); // expected output: "Hello, Jane doe!"