function filter(head, p) {
    // at the initial moment we have no nodes
    let root = null;

    for (; head; head = head.next) {
        // if the callback function over the node data returned true, then add it to the list
        if (p(head.data)) {
            root = insert(root, head.data)
        }
    }

    return root;
}

function insert(root, data) {
    // create new Node
    const temp = new Node(data);

    let ptr;

    if (root === null) {
        root = temp;
    } else {
        // pointer to the current node
        ptr = root;
        while (ptr.next) {
            ptr = ptr.next
        }
        // add a link to the next node to the last node
        ptr.next = temp;
    }
    return root;
}


function Node(data, next = null) {
    this.data = data;
    this.next = next;
}

console.log(filter(null, x => false, null));
console.log(filter(new Node(1, new Node(2, new Node(3))), x => true), new Node(1, new Node(2, new Node(3))));
console.log(filter(new Node(1, new Node(2, new Node(3))), x => x <= 2), new Node(1, new Node(2)));
console.log(filter(new Node(1, new Node(2, new Node(3))), x => x === 1), new Node(1));