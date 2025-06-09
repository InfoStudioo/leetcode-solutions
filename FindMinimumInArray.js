/*
LeetCode 153: Find Minimum in Rotated Sorted Array
Suppose an array of length n sorted in ascending order is rotated between 1 and n times.
For example, the array nums = [0,1,2,4,5,6,7] might become:
[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 0 times.
You are given the integer array nums with unique elements.
Return the minimum element of this array.
You must write an algorithm that runs in O(log n) time.
*/

function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return nums[left];
}

// ---------- Test Cases ----------
console.log(findMin([3,4,5,1,2]));         // Output: 1
console.log(findMin([4,5,6,7,0,1,2]));     // Output: 0
console.log(findMin([11,13,15,17]));       // Output: 11
console.log(findMin([1]));                 // Output: 1
console.log(findMin([2,3,4,5,6,1]));       // Output: 1
