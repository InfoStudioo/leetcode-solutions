/*
Difficulty: Easy
Category: Binary Tree / DFS / Recursion

Problem : - Given the root of a binary tree, invert the tree, and return its root.
Inverting a binary tree means swapping the left and right child of every node.
*/

// Definition for a binary tree node.
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Invert binary tree function
function invertTree(root) {
    if (!root) return null;

    const temp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temp);

    return root;
}

// Helper function to print tree (BFS level-order)
function printTree(root) {
    if (!root) return [];

    const queue = [root];
    const result = [];

    while (queue.length > 0) {
        const node = queue.shift();
        result.push(node ? node.val : null);

        if (node) {
            queue.push(node.left);
            queue.push(node.right);
        }
    }

    return result;
}

// Test Case
// Input: [4,2,7,1,3,6,9]
const root = new TreeNode(4,
    new TreeNode(2,
        new TreeNode(1),
        new TreeNode(3)
    ),
    new TreeNode(7,
        new TreeNode(6),
        new TreeNode(9)
    )
);

console.log("Original Tree (Level-Order):", printTree(root));

const invertedRoot = invertTree(root);

console.log("Inverted Tree (Level-Order):", printTree(invertedRoot));
