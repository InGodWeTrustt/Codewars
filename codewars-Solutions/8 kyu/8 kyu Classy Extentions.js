// class Animal{
//     constructor(name){
//         this.name = name;
//     }
// }

class Cat extends Animal {
    constructor(name) {
        super(name)
    }

    speak() {
        return `${this.name} meows.`
    }
}




var cat = new Cat('Mr Whiskers');
console.log(cat.speak(),'Mr Whiskers meows.')