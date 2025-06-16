/*
Difficulty: Medium
Category: Array / Matrix Manipulation
Problem :- You are given an n x n 2D matrix representing an image, rotate the image in-place by 90 degrees (clockwise).

You must rotate the input matrix in-place, which means you have to modify the input matrix directly. Do not allocate 
another 2D matrix to do the rotation.
*/

function rotate(matrix) {
    const n = matrix.length;

    // Transpose
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    // Reverse each row
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
}

// Test case
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log("Original Matrix:");
console.log(matrix.map(row => [...row])); // Clone before modifying

rotate(matrix);

console.log("Rotated Matrix:");
console.log(matrix);
