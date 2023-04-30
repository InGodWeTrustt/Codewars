
// preloaded class Node
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// preloaded class LList
class LList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    push(node) {
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }
}

// main solution
LList.prototype[Symbol.iterator] = function () {
    let curNode = this.head;
    return {
        next() {
            if (!curNode) {
                return { done: true }
            }
            const res = { value: curNode.value, done: false };
            curNode = curNode.next;
            return res;
        }
    }
}


// Example
let lList = new LList();

for (let i = 0; i < 4; ++i) {
    lList.push(new Node(i));
}

let values = [];
for (let v of lList) {
    values.push(v);
}

console.log(values, [0, 1, 2, 3]);