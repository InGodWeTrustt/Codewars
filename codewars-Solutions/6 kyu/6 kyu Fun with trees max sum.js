function maxSum(root) {
    if (root == null) return 0;
    const left = maxSum(root.left);
    const right = maxSum(root.right);
    return root.value + Math.max(left, right);
}


// Example
function TreeNode(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
};

const root = new TreeNode(5, new TreeNode(-22, new TreeNode(9), new TreeNode(50)), new TreeNode(11, new TreeNode(9), new TreeNode(2)));
console.log(maxSum(root) === 33);