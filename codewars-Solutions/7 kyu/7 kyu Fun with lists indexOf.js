function indexOf(head, value) {
    let idx = 0;
    let cur = head;

    while (cur !== null) {
        if (cur.data === value) {
            return idx;
        }
        idx++;
        cur = cur.next;
    }

    return -1;
}