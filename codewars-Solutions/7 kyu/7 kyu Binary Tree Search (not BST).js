function search(n, root) {
    if (root === null) return false;
    if (root.value === n) {
        return true;
    }

    if (search(n, root.left)) {
        return true
    } else if (search(n, root.right)) {
        return true;
    } else {
        return false;
    }
}


// Example
class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

const root = new Node(666, new Node(555), new Node(444));
console.log(search(444, root), true);
console.log(search(555, root), true);
console.log(search(666, root), true);
console.log(search(777, root), false);