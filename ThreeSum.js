/*Difficulty: Medium
Category: Array, Two Pointers, Sorting

Problem: Given an integer array nums, return all the 
triplets [nums[i], nums[j], nums[k]] such that:
i != j,
i != k,
j != k, and
nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.
*/

function threeSum(nums) {
    const result = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (nums[left] === nums[left + 1]) left++;
                while (nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}

// Test cases
function test() {
    console.log("Test 1:", threeSum([-1, 0, 1, 2, -1, -4]));  // Output: [[-1, -1, 2], [-1, 0, 1]]
    console.log("Test 2:", threeSum([]));                   // Output: []
    console.log("Test 3:", threeSum([0, 0, 0]));            // Output: [[0, 0, 0]]
    console.log("Test 4:", threeSum([-2, 0, 1, 1, 2]));     // Output: [[-2, 0, 2], [-2, 1, 1]]
}

test();
