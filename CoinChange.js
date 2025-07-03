/*Difficulty: Medium
Category: Dynamic Programming, Breadth-First Search (BFS)

Problem: You are given an integer array coins representing 
coins of different denominations and an integer amount representing 
a total amount of money.

Return the fewest number of coins that you need to make up that
 amount. If that amount of money cannot be made up by any combination
  of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.
*/

function coinChange(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
}

// Test cases
function test() {
    console.log("Test 1:", coinChange([1, 2, 5], 11)); // Output: 3
    console.log("Test 2:", coinChange([2], 3));        // Output: -1
    console.log("Test 3:", coinChange([1], 0));         // Output: 0
    console.log("Test 4:", coinChange([1, 3, 4], 6));   // Output: 2 (3+3 or 4+1+1)
}

test();
