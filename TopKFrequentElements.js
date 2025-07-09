/*
Difficulty: Medium
Category: Hash Table, Heap / Priority Queue, Bucket Sort, Counting

Problem: Given an integer array nums and an integer k, 
return the k most frequent elements.

You may return the answer in any order.
*/

function topKFrequent(nums, k) {
    const freqMap = new Map();

    // Count frequency of each number
    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    // Bucket sort: index = frequency
    const bucket = Array(
        nums.length + 1).fill().map(() => []);
    for (let [num, freq] of freqMap.entries()) {
        bucket[freq].push(num);
    }

    // Get top k elements from buckets
    const result = [];
    for (let i = bucket.length - 1; i >= 0 && 
        result.length < k; i--) {
        if (bucket[i].length > 0) {
            result.push(...bucket[i]);
        }
    }

    return result.slice(0, k);
}

// Test cases
function test() {
    console.log("Test 1:", topKFrequent([1,1,1,2,2,3], 2)); // [1,2]
    console.log("Test 2:", topKFrequent([1], 1));           // [1]
    console.log("Test 3:", topKFrequent([4,4,4,5,5,6], 1)); // [4]
    console.log("Test 4:", topKFrequent([1,2,3,4,5], 3));   // [1,2,3] or any 3 unique
}

test();
