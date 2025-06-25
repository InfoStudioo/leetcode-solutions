/*
Difficulty: Easy
Category: Hash Table, String, Sorting

Problem: Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 typically using all the original letters exactly once.
*/

function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    const count = {};

    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    for (let char of t) {
        if (!count[char]) return false;
        count[char]--;
    }

    return true;
}

// ✅ Test Cases
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car"));         // false
console.log(isAnagram("listen", "silent"));   // true
console.log(isAnagram("a", "a"));              // true
console.log(isAnagram("a", "b"));              // false
