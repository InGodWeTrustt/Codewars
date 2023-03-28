function anyMatch(head, p) {
    let flag = false;

    for (; head; head = head.next) {
        if (p(head.data)) {
            flag = true;
            break;
        }
    }

    return flag;
}

function allMatch(head, p) {
    let flag = true;

    for (; head; head = head.next) {
        if (!p(head.data)) {
            flag = false;
            break;
        }
    }

    return flag;
}

// console.log(anyMatch(null, x => false), false);
// console.log(anyMatch(null, x => true), false);
// console.log(allMatch(null, x => false), true);
// console.log(allMatch(null, x => true), true);
// console.log(anyMatch(listFromArray([1, 2, 3]), x => x > 1), true);
// console.log(allMatch(listFromArray([1, 2, 3]), x => x > 1), false);