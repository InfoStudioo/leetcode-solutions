/*
Difficulty: Easy
Category: Array, Hash Table, Divide and Conquer, Sorting, Boyer-Moore Voting Algorithm

Problem: Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times.
 You may assume that the majority element always exists in the array.
*/

function majorityElement(nums) {
    let count = 0;
    let candidate = null;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
}

// ✅ Test Cases
console.log("Test 1:", majorityElement([3,2,3]));           // Output: 3
console.log("Test 2:", majorityElement([2,2,1,1,1,2,2]));   // Output: 2
console.log("Test 3:", majorityElement([1]));               // Output: 1
console.log("Test 4:", majorityElement([6,5,5]));           // Output: 5
