function lastIndexOf(head, value) {
    let idx = count = -1;
    let current = head;

    while (current) {
        count++;
        if (current.data === value) {
            idx = count;
        }
        current = current.next;
    }

    return idx;
}

/**
    console.log(lastIndexOf(null, 17), -1);
    console.log(lastIndexOf(listFromArray([1, 2, 3]), 2), 1);
    console.log(lastIndexOf(listFromArray([1, 2, 3]), 4), -1);
    console.log(lastIndexOf(listFromArray(['aaa', 'b', 'abc']), 'aaa'), 0);
    console.log(lastIndexOf(listFromArray(['aaa', 'b', 'abc']), 'c'), -1);
    console.log(lastIndexOf(listFromArray([17, '17', 1.2]), 17), 0);
    console.log(lastIndexOf(listFromArray([17, '17', 1.2]), '17'), 1);
    console.log(lastIndexOf(listFromArray([1, 2, 3, 3]), 3), 3);
 */