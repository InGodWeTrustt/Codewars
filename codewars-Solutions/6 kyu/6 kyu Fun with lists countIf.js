function countIf(head, p) {
    let count = 0;
    let current = head;

    while (current) {
        if (p(current.data)) {
            count++;
        }
        current = current.next;
    }

    return count;
}

// console.log(countIf(null, x => false), 0);
// console.log(countIf(listFromArray([1, 2, 3]), x => true), 3);
// console.log(countIf(listFromArray([1, 2, 3]), x => x <= 2), 2);