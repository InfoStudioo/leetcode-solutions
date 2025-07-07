/*
 Difficulty: Easy
 Category: Array, Dynamic Programming, Greedy

 Problem: You are given an array prices where prices[i] is the price
  of a given stock on the iᵗʰ day.

You want to maximize your profit by choosing a single day to 
buy one stock and a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. 
If you cannot achieve any profit, return 0.
*/

function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price;
        } else {
            maxProfit = Math.max(maxProfit, price - minPrice);
        }
    }

    return maxProfit;
}

// ✅ Test cases
function test() {
    console.log("Test 1:", maxProfit([7, 1, 5, 3, 6, 4]));  // Output: 5
    console.log("Test 2:", maxProfit([7, 6, 4, 3, 1]));      // Output: 0
    console.log("Test 3:", maxProfit([2, 4, 1]));            // Output: 2
    console.log("Test 4:", maxProfit([1, 2]));               // Output: 1
}

test();
