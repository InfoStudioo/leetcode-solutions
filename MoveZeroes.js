/*
Difficulty: Easy
Category: Array, Two Pointers, In-Place Algorithm

Problem: Given an integer array nums, move all 0's to the end of it 
while maintaining the relative order of the non-zero elements.
*/

function moveZeroes(nums) {
    let insertPos = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[insertPos] = nums[i];
            insertPos++;
        }
    }

    for (let i = insertPos; i < nums.length; i++) {
        nums[i] = 0;
    }

    return nums;
}

// Test Cases
function test() {
    let arr1 = [0, 1, 0, 3, 12];
    let arr2 = [0];
    let arr3 = [1, 0, 2, 0, 3, 0];
    let arr4 = [4, 2, 4, 0, 0, 3, 0, 5, 1, 0];

    console.log("Before:", arr1);
    console.log("After: ", moveZeroes(arr1));

    console.log("Before:", arr2);
    console.log("After: ", moveZeroes(arr2));

    console.log("Before:", arr3);
    console.log("After: ", moveZeroes(arr3));

    console.log("Before:", arr4);
    console.log("After: ", moveZeroes(arr4));
}

test();
