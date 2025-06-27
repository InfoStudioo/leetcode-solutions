/*
Difficulty: Medium
Category: Greedy, Array, Dynamic Programming

Problem: You are given an integer array nums. You are initially positioned 
at the array's first index, and each element in the array represents your maximum 
jump length at that position.

Return true if you can reach the last index, or false otherwise.
*/

function canJump(nums) {
    let maxReach = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i > maxReach) return false;
        maxReach = Math.max(maxReach, i + nums[i]);
    }

    return true;
}

// ✅ Test Cases
console.log("Test 1:", canJump([2,3,1,1,4]));  // true
console.log("Test 2:", canJump([3,2,1,0,4]));  // false
console.log("Test 3:", canJump([0]));          // true
console.log("Test 4:", canJump([2,0,0]));      // true
console.log("Test 5:", canJump([1,1,0,1]));    // false
