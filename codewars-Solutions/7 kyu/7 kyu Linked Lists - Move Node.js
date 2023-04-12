function Node(data) {
    this.data = data;
    this.next = null;
}

function Context(source, dest) {
    this.source = source;
    this.dest = dest;
}

function moveNode(source, dest) {
    if (source === null) throw new Error('Source list is empty');

    const movedNode = source;
    source = movedNode.next;
    movedNode.next = dest;
    dest = movedNode;

    return new Context(source, dest);
}

// Example
const source = new Node(1);
source.next = new Node(2);
source.next.next = new Node(3);
// console.log(source); // 1 -> 2 -> 3 -> null

const dest = new Node(4);
dest.next = new Node(5);
dest.next.next = new Node(6);
// console.log(dest); // 4 -> 5 -> 6 -> null

console.log(moveNode(source, dest).source); // 2 -> 3 -> null
console.log(moveNode(source, dest).dest); // 1 -> 4 -> 5 -> 6 -> null