/*
Difficulty: Medium
Category: Hash Table, String, Sorting

Problem:- Given an array of strings strs, group the anagrams together.
 You can return the answer in any order.
*/

function groupAnagrams(strs) {
    const map = new Map();

    for (let str of strs) {
        const sorted = str.split('').sort().join('');
        if (!map.has(sorted)) {
            map.set(sorted, []);
        }
        map.get(sorted).push(str);
    }

    return Array.from(map.values());
}

// Test cases
function test() {
    const test1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
    const test2 = [""];
    const test3 = ["a"];

    console.log("Test 1:", groupAnagrams(test1));
    console.log("Test 2:", groupAnagrams(test2));
    console.log("Test 3:", groupAnagrams(test3));
}

test();
