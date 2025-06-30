/*Difficulty: Medium
Category: Array, Sorting

Problem: Given an array of intervals where intervals[i] = [start_i, end_i], 
merge all overlapping intervals, and return an array of the non-overlapping 
intervals that cover all the intervals in the input.

*/

function merge(intervals) {
    if (!intervals.length) return [];

    intervals.sort((a, b) => a[0] - b[0]);

    const merged = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const prev = merged[merged.length - 1];
        const curr = intervals[i];

        if (curr[0] <= prev[1]) {
            prev[1] = Math.max(prev[1], curr[1]);
        } else {
            merged.push(curr);
        }
    }

    return merged;
}

// ✅ Test Cases
console.log("Test 1:", merge([[1,3],[2,6],[8,10],[15,18]])); // [[1,6],[8,10],[15,18]]
console.log("Test 2:", merge([[1,4],[4,5]]));                // [[1,5]]
console.log("Test 3:", merge([[1,10],[2,3],[4,5]]));          // [[1,10]]
console.log("Test 4:", merge([[1,2]]));                      // [[1,2]]
console.log("Test 5:", merge([]));                           // []
