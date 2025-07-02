/*
Difficulty: Medium

Category: Dynamic Programming, Math, Combinatorics

Problem: There is a robot located at the top-left 
corner of an m x n grid (marked (0, 0)).

The robot can only move either down or right at any 
point in time. The robot is trying to reach the
 bottom-right corner of the grid (marked (m - 1, n - 1)).

How many possible unique paths are there?
*/

function uniquePaths(m, n) {
    const dp = Array(m).fill(null).map(() => Array(n).fill(1));

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[m - 1][n - 1];
}

// Test cases
function test() {
    console.log("Unique Paths (3x7):", uniquePaths(3, 7)); // 28
    console.log("Unique Paths (3x2):", uniquePaths(3, 2)); // 3
    console.log("Unique Paths (1x1):", uniquePaths(1, 1)); // 1
    console.log("Unique Paths (10x10):", uniquePaths(10, 10)); // 48620
}

test();
