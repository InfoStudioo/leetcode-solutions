/*
LeetCode  647. Palindromic Substrings
Given a string s, return the number of palindromic substrings in it.
A string is a palindrome when it reads the same backward as forward.
A substring is a contiguous sequence of characters within the string.
*/

function countSubstrings(s) {
    let count = 0;

    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            count++;
            left--;
            right++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(i, i);     // Odd length palindromes
        expandAroundCenter(i, i + 1); // Even length palindromes
    }

    return count;
}

// ---------- Test Cases ----------

console.log(countSubstrings("abc"));  // Output: 3
console.log(countSubstrings("aaa"));  // Output: 6
