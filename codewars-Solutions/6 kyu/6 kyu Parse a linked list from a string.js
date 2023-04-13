// preloaded class Node
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

function parse(string) {
    const data = string.split(" -> ").slice(0, -1);

    let root = null;

    for (let i = 0; i < data.length; i++) {
        root = insert(root, +data[i]);
    }

    return root;
}

function insert(node, data) {
    if (!node) {
        return new Node(data);
    }

    let ptr = node;
    while (ptr.next) {
        ptr = ptr.next;
    }

    ptr.next = new Node(data);
    return node;
}


console.log(parse("1 -> 2 -> 3 -> null"), new Node(1, new Node(2, new Node(3))));