class Person {
    static greetExtraTerrestrials(raceName) {
        return `Welcome to Planet Earth ${raceName}`;
    }

    constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male') {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }

    sayFullName() {
        return [this.firstName, this.lastName].join(' ')
    }
}

// Example
let john = new Person();
console.log(john.firstName, "John");
console.log(john.lastName, "Doe");
console.log(john.age, 0);
console.log(john.gender, "Male");
console.log(john.sayFullName(), "John Doe");

let jane = new Person("Jane", "Doe", 25, "Female");
console.log(jane.firstName, "Jane");
console.log(jane.lastName, "Doe");
console.log(jane.age, 25);
console.log(jane.gender, "Female");
console.log(jane.sayFullName(), "Jane Doe");