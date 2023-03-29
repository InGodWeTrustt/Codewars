function reduce(head, f, init) {
    let acc = init;

    for (; head; head = head.next) {
        const cur = head.data;
        acc = f(acc, cur);
    }

    return acc;
}

// Example
function Node(data, next = null) {
    this.data = data;
    this.next = next;
}

console.log(reduce(null, (a, b) => a + b, 0), 0);
console.log(reduce(new Node(1, new Node(2, new Node(3))), (a, b) => a + b, 0), 6);
console.log(reduce(new Node(1, new Node(2, new Node(3, new Node(4)))), (a, b) => a * b, 1), 24);
console.log(reduce(new Node('a', new Node('b', new Node('c'))), (a, b) => a + b, ''), 'abc');
