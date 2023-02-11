function Counter() {
    this.value = 0;
}

Counter.prototype.increase = function () {
    this.value++;
};

Counter.prototype.getValue = function () {
    return this.value;
};

Counter.prototype.reset = function () {
    this.value = 0;
};


// Example
const counter = new Counter();
console.log(counter.getValue(), 0, 'Initial counter value must be 0');
counter.increase();
console.log(counter.getValue(), 1, 'Counter value must be increased');
counter.reset();
console.log(counter.getValue(), 0, 'Counter value must be 0 after reset');