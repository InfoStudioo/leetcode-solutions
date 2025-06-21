/*
Difficulty: Medium
Category: Array, Prefix Product, Space Optimization

Problem : Given an integer array nums, return an array answer such that answer[i] is equal 
to the product of all the elements of nums except nums[i].
*/

function productExceptSelf(nums) {
    const n = nums.length;
    const res = new Array(n).fill(1);

    let prefix = 1;
    for (let i = 0; i < n; i++) {
        res[i] = prefix;
        prefix *= nums[i];
    }

    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        res[i] *= suffix;
        suffix *= nums[i];
    }

    return res;
}

// ✅ Test Cases
console.log(productExceptSelf([1, 2, 3, 4]));       // [24, 12, 8, 6]
console.log(productExceptSelf([-1, 1, 0, -3, 3]));  // [0, 0, 9, 0, 0]
console.log(productExceptSelf([2, 3, 4, 5]));       // [60, 40, 30, 24]
