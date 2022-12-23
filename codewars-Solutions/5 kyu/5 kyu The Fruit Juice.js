function Jar() {
    this.map = new Map()
    this.totalCount = () => this.map.size;
}

Jar.prototype.add = function (amount, type) {
    const prev = this.map.get(type)
    if (prev) {
        this.map.set(type, prev + amount)
    } else {
        this.map.set(type, amount)
    }
    return this;
};

Jar.prototype.pourOut = function (amount) {
    const total = this.getTotalAmount()
    const decreaseTotal = total - amount;
    for(const [k, v] of this.map){
        const concentration = (v / total);
        const newValue = concentration * decreaseTotal;
        this.map.set(k, newValue )
    }
};

Jar.prototype.getTotalAmount = function () {
    return [...this.map].reduce((acc, cur) => acc + cur[1], 0)
};

Jar.prototype.getConcentration = function (type) {
    if(this.totalCount() === 0 || !this.map.get(type)) return 0;
    return this.map.get(type) / this.getTotalAmount();
}

let jar = new Jar();

console.log(jar.getConcentration('apple'), 0);
jar.add(200, 'apple');
console.log(jar.getTotalAmount(), 200 );
console.log(jar.getConcentration('apple'), 1);

jar.add(200, 'banana');
console.log(jar.getTotalAmount(), 400);
console.log(jar.getConcentration('apple'), 0.5);
console.log(jar.getConcentration('banana'), 0.5);
console.log(jar.pourOut(200));