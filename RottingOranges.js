/*
Difficulty: Medium
Category: Breadth-First Search (BFS), Matrix

Problem:- You are given an m x n grid where each cell can have one of three values:

0 → empty cell
1 → fresh orange
2 → rotten orange
Every minute, any rotten orange can rot adjacent fresh oranges (up, down, left, right).

Return the minimum number of minutes that must elapse until no cell has a fresh orange.
If this is impossible, return -1.
*/

function orangesRotting(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const queue = [];
    let fresh = 0;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 2) {
                queue.push([r, c]);
            } else if (grid[r][c] === 1) {
                fresh++;
            }
        }
    }

    let minutes = 0;
    const directions = [[1,0], [-1,0], [0,1], [0,-1]];

    while (queue.length > 0 && fresh > 0) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            const [r, c] = queue.shift();
            for (const [dr, dc] of directions) {
                const row = r + dr;
                const col = c + dc;

                if (
                    row >= 0 && row < rows &&
                    col >= 0 && col < cols &&
                    grid[row][col] === 1
                ) {
                    grid[row][col] = 2;
                    queue.push([row, col]);
                    fresh--;
                }
            }
        }
        minutes++;
    }

    return fresh === 0 ? minutes : -1;
}

// ✅ Test Cases
console.log("Test 1:", orangesRotting([
  [2,1,1],
  [1,1,0],
  [0,1,1]
])); // Output: 4

console.log("Test 2:", orangesRotting([
  [2,1,1],
  [0,1,1],
  [1,0,1]
])); // Output: -1

console.log("Test 3:", orangesRotting([
  [0,2]
])); // Output: 0
