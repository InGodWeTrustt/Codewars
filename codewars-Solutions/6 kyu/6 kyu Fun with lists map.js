const insert = (root, data) => {
    const tmp = new Node(data);
    let ptr;

    if (root === null) {
        root = tmp;
    } else {
        ptr = root;

        while (ptr.next !== null) {
            ptr = ptr.next;
        }

        ptr.next = tmp;
    }

    return root;
}

function map(head, f) {
    let root = null;

    for (; head; head = head.next) {
        const result = f(head.data)
        root = insert(root, result);
    }

    return root;
}



// Example
function Node(data, next = null){
    this.data = data;
    this.next = next;
}

console.log(map(null, x => false), null);
console.log(map(new Node(1, new Node(2, new Node(3))), x => x * 2), new Node(2, new Node(4, new Node(6))));