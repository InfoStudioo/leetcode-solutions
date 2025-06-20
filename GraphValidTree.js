/*
Difficulty: Medium
Category: Graph, Union Find / DFS

Problem: You have a graph of n nodes labeled from 0 to n - 1. You are given a 2D integer array edges where 
edges[i] = [aᵢ, bᵢ] indicates that there is an undirected edge between nodes aᵢ and bᵢ.

Return true if the edges make up a valid tree, and false otherwise.
*/

function validTree(n, edges) {
    if (edges.length !== n - 1) return false;

    const graph = Array.from({ length: n }, () => []);

    for (let [a, b] of edges) {
        graph[a].push(b);
        graph[b].push(a);
    }

    const visited = new Set();

    const dfs = (node, parent) => {
        if (visited.has(node)) return false;
        visited.add(node);

        for (let neighbor of graph[node]) {
            if (neighbor === parent) continue;
            if (!dfs(neighbor, node)) return false;
        }
        return true;
    };

    if (!dfs(0, -1)) return false;

    return visited.size === n;
}

// Test Case 1: Valid Tree
console.log(validTree(5, [[0,1],[0,2],[0,3],[1,4]])); // true

// Test Case 2: Has cycle
console.log(validTree(5, [[0,1],[1,2],[2,3],[1,3],[1,4]])); // false

// Test Case 3: Not connected
console.log(validTree(4, [[0,1],[2,3]])); // false

// Test Case 4: Single node
console.log(validTree(1, [])); // true
