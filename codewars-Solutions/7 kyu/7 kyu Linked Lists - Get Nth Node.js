function Node(data) {
    this.data = data;
    this.next = null;
}

function getNth(node, index) {
    if (index < 0 || index > getLen(node)) {
        throw new Error('dcscsc')
    }

    let curNode = node;
    for (let i = 0; curNode.next; i++) {
        if (i === index) {
            break;
        }
        curNode = curNode.next;
    }

    return curNode;
}

function getLen(node) {
    let count = 0;
    let head = node;
    while (head.next) {
        count++;
        head = head.next;
    }
    return count;
}

