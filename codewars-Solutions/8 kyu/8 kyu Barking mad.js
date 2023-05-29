function Dog(breed) {
    this.breed = breed;
}

var snoopy = new Dog("Beagle");

Dog.prototype.bark = function () {
    return "Woof";
};

var scoobydoo = new Dog("Great Dane");

console.log(snoopy.bark() == "Woof"); // Output: true
console.log(scoobydoo.bark() == "Woof"); // Output: true