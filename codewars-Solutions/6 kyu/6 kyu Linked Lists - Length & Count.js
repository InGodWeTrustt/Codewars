function Node(data) {
    this.data = data;
    this.next = null;
}

function length(head) {
    let res = 0;
    while (head) {
        res++;
        head = head.next;
    }
    return res;
}

function count(head, data) {
    let res = 0;
    while (head) {
        if (head.data === data) res++;
        head = head.next;
    }
    return res;
}