/*
Difficulty: Easy
 Category: Tree, Depth-First Search (DFS), Breadth-First Search (BFS)

 Problem: Given the roots of two binary trees p and q, 
 write a function to check if they are the same or not.

Two binary trees are considered the same if they are 
structurally identical, and the nodes have the same value.
*/

function isSameTree(p, q) {
    if (!p && !q) return true;
    if (!p || !q || p.val !== q.val) return false;

    return isSameTree(p.left, q.left) && 
    isSameTree(p.right, q.right);
}

// Helper function to build a binary tree from level-order array
function buildTree(values) {
    if (!values.length) return null;

    let nodes = values.map(
        val => val === null ? null : { val, left: null, 
            right: null });
    let kids = nodes.slice(1);

    for (let i = 0; i < nodes.length && kids.length; i++) {
        if (nodes[i]) {
            nodes[i].left = kids.shift() || null;
            nodes[i].right = kids.shift() || null;
        }
    }

    return nodes[0];
}

// Test cases
function test() {
    const tree1 = buildTree([1, 2, 3]);
    const tree2 = buildTree([1, 2, 3]);
    console.log("Test 1:", isSameTree(tree1, tree2)); // true

    const tree3 = buildTree([1, 2]);
    const tree4 = buildTree([1, null, 2]);
    console.log("Test 2:", isSameTree(tree3, tree4)); // false

    const tree5 = buildTree([1, 2, 1]);
    const tree6 = buildTree([1, 1, 2]);
    console.log("Test 3:", isSameTree(tree5, tree6)); // false
}

test();
