function Node(data) {
    this.data = data;
    this.next = null;
}

function insertNth(head, index, data) {
    if (index < 0) throw new Error();

    const newNode = new Node(data);

    if (index === 0) {
        newNode.next = head;
        return newNode;
    }

    let cur = head;
    let i = 0;

    while (i < index - 1) {
        if (!cur.next) {
            throw new Error();
        }
        cur = cur.next;
        i++;
    }

    newNode.next = cur.next;
    cur.next = newNode;

    return head;
}