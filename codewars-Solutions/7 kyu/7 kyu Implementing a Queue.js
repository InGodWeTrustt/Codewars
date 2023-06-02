var Queue = function () {
    // implement your Queue constructor here
    this.queue = []
};

Queue.prototype.enqueue = function (item) {
    // add item to the queue
    this.queue.push(item)
};

Queue.prototype.dequeue = function () {
    return this.queue.shift()
};

Queue.prototype.size = function () {
    // return number of items in queue so far
    return this.queue.length
};


const queue = new Queue();
queue.enqueue("I'm number one!");
queue.enqueue("I'm number two!");
queue.enqueue("I'm number three!");
queue.dequeue();
console.log(queue.size() === 2); // Output: true