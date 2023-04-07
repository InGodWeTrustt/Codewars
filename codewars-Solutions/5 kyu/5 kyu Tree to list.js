// preloaded Node definition :
class Node {
  constructor (data, children = []) {
    this.data = data;
    this.children = children;
  }
}

function treeToArray(tree) {
    if (!tree || Array.isArray(tree)) return [];
    const queue = [tree];
    const values = [];

    while (queue.length) {
        const curNode = queue.shift();
        values.push(curNode.data);
        if (curNode.children?.length) {
            queue.push(...curNode.children)
        }
    }

    return values;
}

// Example test cases
console.log(treeToArray([])); // []

const tree1 = new Node(1, [
  new Node(2, [new Node(3), new Node(4), new Node(5)]), 
  new Node(3, [new Node(7)])
]);

console.log(treeToArray(tree1)); // [1, 2, 3, 3, 4, 5, 7]

const tree2 = new Node(1, [
  new Node(2, [new Node(3), new Node(4)]), 
  new Node(5, [new Node(6)]), 
  new Node(7)
]);
console.log(treeToArray(tree2)); // [1, 2, 5, 7, 3, 4, 6]

const tree3 = new Node(1, [
  new Node('a', [new Node('A'), new Node('B')]), 
  new Node('b', [new Node('C'), new Node('D', [new Node(null)])])
]);
console.log(treeToArray(tree3)); // [1, 'a', 'b', 'A', 'B', 'C', 'D', null]