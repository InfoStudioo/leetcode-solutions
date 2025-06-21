/*
Difficulty: Easy
Category: Tree, DFS, Recursion

Problem: Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with 
the same structure and node values as subRoot, and false otherwise.
*/


// TreeNode class
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Main Function
function isSubtree(root, subRoot) {
    if (!root) return false;

    if (isSameTree(root, subRoot)) return true;

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

// Helper Function to Compare Trees
function isSameTree(a, b) {
    if (!a && !b) return true;
    if (!a || !b) return false;
    if (a.val !== b.val) return false;

    return isSameTree(a.left, b.left) && isSameTree(a.right, b.right);
}

// ✅ Test Case 1
const root1 = new TreeNode(3);
root1.left = new TreeNode(4);
root1.right = new TreeNode(5);
root1.left.left = new TreeNode(1);
root1.left.right = new TreeNode(2);

const subRoot1 = new TreeNode(4);
subRoot1.left = new TreeNode(1);
subRoot1.right = new TreeNode(2);

console.log(isSubtree(root1, subRoot1)); // true

// ✅ Test Case 2
const root2 = new TreeNode(3);
root2.left = new TreeNode(4);
root2.right = new TreeNode(5);
root2.left.left = new TreeNode(1);
root2.left.right = new TreeNode(2);
root2.left.right.left = new TreeNode(0);

const subRoot2 = new TreeNode(4);
subRoot2.left = new TreeNode(1);
subRoot2.right = new TreeNode(2);

console.log(isSubtree(root2, subRoot2)); // false
