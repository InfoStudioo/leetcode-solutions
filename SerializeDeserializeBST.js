/*Serialize a binary search tree to a single string.

Deserialize the encoded data string to reconstruct the original tree.
The encoded string should be as compact as possible.
You may assume that the tree is a Binary Search Tree (BST) and no duplicate values exist in the BST.
Implement the serialize and deserialize functions:
*/
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function serialize(root) {
    const result = [];

    function dfs(node) {
        if (!node) return;
        result.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);
    return result.join(',');
}

function deserialize(data) {
    if (!data) return null;
    const values = data.split(',').map(Number);
    let index = 0;

    function build(min, max) {
        if (index >= values.length) return null;
        const val = values[index];
        if (val < min || val > max) return null;

        index++;
        const node = new TreeNode(val);
        node.left = build(min, val);
        node.right = build(val, max);
        return node;
    }

    return build(-Infinity, Infinity);
}

// ---------- Test Case ----------

// Create BST:      5
//                /   \
//               3     7
//              / \   /
//             2   4 6

const root = new TreeNode(5);
root.left = new TreeNode(3, new TreeNode(2), new TreeNode(4));
root.right = new TreeNode(7, new TreeNode(6));

// Serialize the tree
const serialized = serialize(root);
console.log("Serialized:", serialized);  // Should be: 5,3,2,4,7,6

// Deserialize it back
const deserialized = deserialize(serialized);

// Utility to print inorder traversal for verification
function inorder(node) {
    if (!node) return;
    inorder(node.left);
    process.stdout.write(node.val + " ");
    inorder(node.right);
}

console.log("Inorder traversal of deserialized tree:");
inorder(deserialized); // Should print: 2 3 4 5 6 7
