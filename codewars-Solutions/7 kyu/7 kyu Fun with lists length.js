function length(head) {
    let length = 0;
    let current = head;
    while (current) {
        length++;
        current = current.next;
    }
    return length;
}

// NOTE
// listFromArray - this is a function that creates a linked list from an array
// console.log(length(null), 0);
// console.log(length(listFromArray([1, 2, 3, 4])), 4);