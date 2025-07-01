/*Difficulty: Easy

 Category: Dynamic Programming, Memoization ,Recursion

 Problem: You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

function climbStairs(n) {
    if (n <= 2) return n;

    let first = 1;
    let second = 2;
    
    for (let i = 3; i <= n; i++) {
        let third = first + second;
        first = second;
        second = third;
    }

    return second;
}

// Test cases
console.log("n = 2 →", climbStairs(2)); // Output: 2
console.log("n = 3 →", climbStairs(3)); // Output: 3
console.log("n = 5 →", climbStairs(5)); // Output: 8
console.log("n = 10 →", climbStairs(10)); // Output: 89
