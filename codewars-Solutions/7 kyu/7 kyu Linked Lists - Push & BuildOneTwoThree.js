function Node(data) {
    this.data = data;
    this.next = null;
}

function push(head, data) {
    if (!head) {
        return new Node(data);
    }

    const newNode = new Node(data);
    newNode.next = head;
    return newNode;
}

function buildOneTwoThree() {
    let root = null;

    for (let i = 3; i > 0; i--) {
        root = push(root, i)
    }

    return root;
}


// Example
console.log(buildOneTwoThree().data === 1);
console.log(buildOneTwoThree().next.data === 2);
console.log(buildOneTwoThree().next.next.data === 3);
console.log(buildOneTwoThree().next.next.next === null);

console.log(push(null, 1).data === 1);
console.log(push(null, 1).next === null);
console.log(push(new Node(1), 2).data === 2);
console.log(push(new Node(1), 2).next.data === 1);