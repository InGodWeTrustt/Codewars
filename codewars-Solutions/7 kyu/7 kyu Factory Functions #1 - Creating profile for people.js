function person(...args) {

    return {
        firstName: args[0],
        lastName: args[1],
        age: args[2],
        gender: args[3],
        employed: args[4],
        occupation: args[5],
        married: args[6],
        sayName() {
             return [this.firstName, this.lastName].join(' ')
        },
        introduce() {
            return `Hello, my name is ${this.sayName()}.  I am ${this.age} years old.  I am a ${this.gender}.`
        }
    }
}

let john = person("John", "Doe", 18, "male", false, null, true);
console.log(john);

console.log();