class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

let str = []
function stringify(list) {
    if(Object.is(list, null)) return 'null';
    str.push(list.data)
    if (Object.is(list.next, null)) {
        const copy = [...str, 'null'];
        str.length = 0;
        return copy.join(' -> ')
    }
    return stringify(list.next)
}

console.log(stringify(new Node(1, new Node(2, new Node(3))))); //"1 -> 2 -> 3 -> null"
console.log(stringify(new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))) ); //"0 -> 1 -> 4 -> 9 -> 16 -> null"
console.log(stringify(null)); // "null"

