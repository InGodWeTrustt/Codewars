class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get info() {
        return `${this.name}s age is ${this.age}`;
    }

    getInfo() {
        return this.info;
    }
}

const john = new Person("john", 34);
console.log(john.getInfo()); // "johns age is 34"