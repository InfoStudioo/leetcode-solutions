/*
Difficulty: Medium
Category: Array, Backtracking

Problem : Given an array nums of distinct integers, return all the possible
 permutations of the array. You can return the answer in any order.
*/

function permute(nums) {
    const result = [];

    const backtrack = (path, remaining) => {
        if (remaining.length === 0) {
            result.push([...path]);
            return;
        }

        for (let i = 0; i < remaining.length; i++) {
            const next = remaining[i];
            const newRemaining = remaining.slice(0, i).concat(remaining.slice(i + 1));
            backtrack([...path, next], newRemaining);
        }
    };

    backtrack([], nums);
    return result;
}

// ✅ Test Cases
console.log("Permutations of [1, 2, 3]:");
console.log(permute([1, 2, 3]));

console.log("\nPermutations of [0, 1]:");
console.log(permute([0, 1]));

console.log("\nPermutations of [1]:");
console.log(permute([1]));
