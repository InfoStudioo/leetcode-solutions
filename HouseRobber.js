/*
Difficulty: Medium
Category: Dynamic Programming, Array
Problem: You are a professional robber planning to rob
 houses along a street. Each house has a certain amount 
 of money stashed. All houses at this place are arranged 
 in a circle, which means the first house is the neighbor of the last one.

Adjacent houses cannot be robbed on the same night 
(i.e., if you rob house i, then you cannot rob
 house i - 1 or house i + 1).

Given an integer array nums representing the amount of money
 of each house, return the maximum amount of money you can 
 rob without alerting the police.
*/

function rob(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    function robLinear(houses) {
        let prev = 0;
        let curr = 0;
        for (let num of houses) {
            let temp = Math.max(curr, prev + num);
            prev = curr;
            curr = temp;
        }
        return curr;
    }

    return Math.max(
        robLinear(nums.slice(0, nums.length - 1)),
        robLinear(nums.slice(1))
    );
}

// Test cases
function test() {
    console.log("Test 1:", rob([2, 3, 2]));     // Output: 3
    console.log("Test 2:", rob([1, 2, 3, 1]));  // Output: 4
    console.log("Test 3:", rob([1, 2, 3]));     // Output: 3
    console.log("Test 4:", rob([0, 0, 0]));     // Output: 0
    console.log("Test 5:", rob([200, 3, 140, 20, 10])); // Output: 340
}

test();
