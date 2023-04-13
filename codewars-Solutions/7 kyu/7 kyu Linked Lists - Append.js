function Node(data) {
    this.data = data;
    this.next = null;
}

function append(listA, listB) {
    if (!listA) { //  check if listA is empty
        return listB;
    }

    let cur = listA;

    //  traverse listA until we find its last element.
    while (cur.next !== null) {
        cur = cur.next;
    }

    // adding a listB to the last element
    cur.next = listB;
    return listA;
}


/**
 * Example
    const listA = 1 -> 2 -> 3 -> null
    const listB = 4 -> 5 -> 6 -> null
    append(listA, listB) === 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
 */
const listA = new Node(1);
listA.next = new Node(2);
listA.next.next = new Node(3);

const listB = new Node(4);
listB.next = new Node(5);
listB.next.next = new Node(6);

console.log(append(listA, listB));