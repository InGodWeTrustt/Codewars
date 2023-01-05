function MinHeap() {
    this.heap = []
    this.heapSize = 0;
}

MinHeap.prototype.siftUp = function (key) {
    while (this.heap[key] < this.heap[Math.floor((key - 1) / 2)]) {
        [this.heap[key], this.heap[Math.floor((key - 1) / 2)]] = [this.heap[Math.floor((key - 1) / 2)], this.heap[key]];
        key = Math.floor((key - 1) / 2);
    }
}

MinHeap.prototype.siftDown = function (key) {
    while (2 * key + 1 < this.heapSize) {
        const leftChild = 2 * key + 1;
        const rightChild = 2 * key + 2;
        let j = leftChild;

        if (rightChild < this.heapSize && this.heap[rightChild] < this.heap[leftChild]) {
            j = rightChild
        }

        if (this.heap[key] <= this.heap[j]) {
            break
        }

        [this.heap[key], this.heap[j]] = [this.heap[j], this.heap[key]];

        key = j;
    }
}

MinHeap.prototype.push = function (key) {
    this.heapSize += 1;
    this.heap[this.heapSize - 1] = key;
    this.siftUp(this.heapSize - 1)
}

MinHeap.prototype.pop = function () {
    if(!this.heapSize) return;
    const minVal = this.heap[0];
    const lastElem = this.heap[this.heapSize - 1];
    this.heap[0] = lastElem;
    this.heapSize -= 1;
    this.heap.length = this.heapSize;
    this.siftDown(0);
    return minVal;
}


const minHeap = new MinHeap;
minHeap.push(10);
minHeap.push(20);
minHeap.push(50);
minHeap.push(100);
minHeap.push(5);
// console.log(minHeap.pop(), 1);
// console.log(minHeap.pop(), 2);
// console.log(minHeap.pop(), 4);
// console.log(minHeap.pop(), 7);
// console.log(minHeap.pop(), 9);
console.log(minHeap.pop(), undefined);