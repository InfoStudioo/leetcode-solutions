/*
Given an array of distinct integers candidates and a target integer target, return a list of 
all unique combinations of candidates where the chosen numbers sum to target.
You may return the combinations in any order.
*/

function combinationSum(candidates, target) {
    const result = [];

    function backtrack(start, combination, total) {
        if (total === target) {
            result.push([...combination]);
            return;
        }

        if (total > target) return;

        for (let i = start; i < candidates.length; i++) {
            combination.push(candidates[i]);
            backtrack(i, combination, total + candidates[i]);
            combination.pop();
        }
    }

    backtrack(0, [], 0);
    return result;
}

// 🧪 Test Cases
console.log(combinationSum([2,3,6,7], 7)); // Output: [[2,2,3],[7]]
console.log(combinationSum([2,3,5], 8));   // Output: [[2,2,2,2],[2,3,3],[3,5]]
console.log(combinationSum([2], 1));       // Output: []
