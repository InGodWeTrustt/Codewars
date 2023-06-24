// Цель -определить длину цикла
// Use the `getNext' method or 'next' property to get (чтобы получить) 
// the following node (следующего узла)
function loop_size(node) {
    let slow = node.getNext();
    let fast = node.getNext().getNext();
    while (slow != fast) {
        slow = slow.getNext();
        fast = fast.getNext().getNext();
    }
    let count = 1;
    fast = fast.getNext();
    while (slow != fast) {
        fast = fast.getNext();
        count++;
    }
    return count;
}

