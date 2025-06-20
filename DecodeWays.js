/*
Difficulty: Medium
Category: Dynamic Programming

Problem: A message containing letters from A-Z is being encoded to numbers using the following mapping:
'A' -> "1"  
'B' -> "2"  
...  
'Z' -> "26"
Given a non-empty string s containing only digits, determine the total number of ways to decode it.
*/

function numDecodings(s) {
    if (!s || s[0] === '0') return 0;

    const n = s.length;
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = s[0] !== '0' ? 1 : 0;

    for (let i = 2; i <= n; i++) {
        const oneDigit = parseInt(s.slice(i - 1, i), 10);
        const twoDigit = parseInt(s.slice(i - 2, i), 10);

        if (oneDigit >= 1) {
            dp[i] += dp[i - 1];
        }

        if (twoDigit >= 10 && twoDigit <= 26) {
            dp[i] += dp[i - 2];
        }
    }

    return dp[n];
}

// ✅ Test Cases
console.log(numDecodings("12"));    // 2
console.log(numDecodings("226"));   // 3
console.log(numDecodings("06"));    // 0
console.log(numDecodings("11106")); // 2
console.log(numDecodings("0"));     // 0
console.log(numDecodings("27"));    // 1
