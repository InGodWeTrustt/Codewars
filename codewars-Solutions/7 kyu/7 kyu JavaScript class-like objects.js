/**
 * Представляет животное.
 * @param {string} name - название животного
 * @param {string} type - тип животного
 */
function Animal(name, type) {
    this.name = name;
    this.type = type;
}

/**
 * Возвращает строку, представляющую животное
 * @returns {string} Строка, которая представляет животное.
 */
Animal.prototype.toString = function () {
    return `${this.name} is a ${this.type}`;
};


// Тетовые примеры
const cat = new Animal("Whiskers", "cat");
console.log(cat.toString()); // "Whiskers is a cat"

const dog = new Animal("Fido", "dog");
console.log(dog.toString()); // "Fido is a dog"