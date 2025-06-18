/*
Difficulty: Medium
Category: Backtracking / Matrix

Problem: Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where “adjacent” cells are horizontally or vertically neighboring.
The same letter cell may not be used more than once.
*/

function exist(board, word) {
    const rows = board.length;
    const cols = board[0].length;

    const dfs = (i, j, index) => {
        if (index === word.length) return true;
        if (
            i < 0 || j < 0 ||
            i >= rows || j >= cols ||
            board[i][j] !== word[index]
        ) return false;

        const temp = board[i][j];
        board[i][j] = '#'; // mark as visited

        const found =
            dfs(i + 1, j, index + 1) ||
            dfs(i - 1, j, index + 1) ||
            dfs(i, j + 1, index + 1) ||
            dfs(i, j - 1, index + 1);

        board[i][j] = temp; // backtrack

        return found;
    };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }

    return false;
}

// Test Cases
const board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
];

console.log("Test 1 - ABCCED:", exist(board.map(row => row.slice()), "ABCCED")); // true
console.log("Test 2 - SEE:", exist(board.map(row => row.slice()), "SEE")); // true
console.log("Test 3 - ABFB:", exist(board.map(row => row.slice()), "ABFB")); // false
console.log("Test 4 - ESE:", exist(board.map(row => row.slice()), "ESE")); // false
