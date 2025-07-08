/*
Difficulty: Hard
Category: Array, Two Pointers, Stack, Dynamic Programming

Problem: Given n non-negative integers representing an
 elevation map where the width of each bar is 1, compute 
 how much water it can trap after raining.
*/

function trap(height) {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let trappedWater = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                trappedWater += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                trappedWater += rightMax - height[right];
            }
            right--;
        }
    }

    return trappedWater;
}

// Test Cases
function test() {
    console.log("Test 1:", trap([0,1,0,2,1,0,1,3,2,1,2,1])); // Output: 6
    console.log("Test 2:", trap([4,2,0,3,2,5]));           // Output: 9
    console.log("Test 3:", trap([1,0,2]));                 // Output: 1
    console.log("Test 4:", trap([5,4,1,2]));               // Output: 1
}

test();
