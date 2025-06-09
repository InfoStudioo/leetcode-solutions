/*
✅ Full LeetCode Question: Clone Graph
Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph.

Each node in the graph contains a value (val) and a list (neighbors) of its neighbors.
*/

class Node {
    constructor(val, neighbors) {
        this.val = val;
        this.neighbors = neighbors || [];
    }
}

function cloneGraph(node) {
    if (!node) return null;

    const visited = new Map();

    function dfs(current) {
        if (visited.has(current)) {
            return visited.get(current);
        }

        const clone = new Node(current.val);
        visited.set(current, clone);

        for (const neighbor of current.neighbors) {
            clone.neighbors.push(dfs(neighbor));
        }

        return clone;
    }

    return dfs(node);
}

// --------- Create sample graph ---------
// 1 -- 2
// |    |
// 4 -- 3

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.neighbors = [node2, node4];
node2.neighbors = [node1, node3];
node3.neighbors = [node2, node4];
node4.neighbors = [node1, node3];

// --------- Clone and Print Result ---------
const clonedGraph = cloneGraph(node1);

// Simple print to verify structure
function printGraph(node, visited = new Set()) {
    if (!node || visited.has(node.val)) return;
    visited.add(node.val);
    const neighborVals = node.neighbors.map(n => n.val);
    console.log(`Node ${node.val} -> Neighbors: ${neighborVals.join(', ')}`);
    for (const neighbor of node.neighbors) {
        printGraph(neighbor, visited);
    }
}

printGraph(clonedGraph);
