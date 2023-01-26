const person = {
    firstName: 'Jane',
    lastName: 'Doe',
    get fullName(){
        return [this.firstName, this.lastName].join(' ')
        // return `${this.firstName} ${this.lastName}`
        // return this.firstName+' '+this.lastName
    },
    set fullName(value){
        const [firstName, lastName] = value.split(' ')
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

console.log(person.firstName); // Jane
console.log(person.lastName); // Doe
console.log(person.fullName); // Jane Doe
person.fullName = 'Ivan Ivanov'; 
console.log(person.firstName); // Ivan
console.log(person.lastName);  // Ivanov
console.log(person.fullName); // Ivan Ivanov
