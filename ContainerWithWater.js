/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two 
endpoints of the iᵗʰ line are at (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, 
such that the container contains the most water.
Return the maximum amount of water a container can store.

Note: You may not slant the container.
*/

function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;

    while (left < right) {
        const width = right - left;
        const minHeight = Math.min(height[left], height[right]);
        const area = width * minHeight;
        max = Math.max(max, area);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return max;
}

// 🧪 Test Cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Output: 49
console.log(maxArea([1,1]));               // Output: 1
console.log(maxArea([4,3,2,1,4]));         // Output: 16
console.log(maxArea([1,2,1]));             // Output: 2
