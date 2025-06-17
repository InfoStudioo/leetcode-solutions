/*
Difficulty: Medium
Category: Graph / Depth-First Search (DFS) / Breadth-First Search (BFS)

Given a 2D grid map of '1's (land) and '0's (water), count the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
You may assume all four edges of the grid are surrounded by water.
*/

function numIslands(grid) {
    if (!grid || grid.length === 0) return 0;

    const rows = grid.length;
    const cols = grid[0].length;
    let count = 0;

    const dfs = (r, c) => {
        if (
            r < 0 || c < 0 ||
            r >= rows || c >= cols ||
            grid[r][c] === '0'
        ) return;

        grid[r][c] = '0'; // mark as visited

        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    };

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === '1') {
                count++;
                dfs(r, c);
            }
        }
    }

    return count;
}

// Test Case
const grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
];

console.log("Number of Islands:", numIslands(grid)); // Expected Output: 3
