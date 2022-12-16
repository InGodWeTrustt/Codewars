var Cat = (function foo() {
    const res = []

    const ctor = function Cat(name, weight) {
        if(!name || !weight) throw new Error('name or weight required fields');
        Object.defineProperty(this, 'name', {
            get() {
                return name
            }
        });
        Object.defineProperty(this, 'weight', {
            get: () => weight, 
            set: v => {
              weight = v;
            }
        });
        res.push(this)
    }
    ctor.averageWeight = () => res.reduce((a, b) => (a + b.weight), 0) / res.length
    return ctor
}())


let fluffy = new Cat('fluffy', 15);
console.log('fluffy: ', fluffy);
let garfield = new Cat('garfield', 25);
console.log('garfield: ', garfield);

fluffy.weight = 30;
console.log('fluffy: ', fluffy);
console.log(fluffy instanceof Cat, true);
console.log(fluffy.averageWeight, undefined);
console.log(typeof Cat.averageWeight, "function");
console.log(Cat.averageWeight());