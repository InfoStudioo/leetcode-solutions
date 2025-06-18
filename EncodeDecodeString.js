/*
Difficulty: Medium
Category: String / Design

Problem : Design an algorithm to encode a list of strings to a single string.

The encoded string is then decoded back to the original list of strings.
*/

// Encode function: converts array of strings to a single string
const encode = function(strs) {
    return strs.map(str => `${str.length}#${str}`).join('');
};

// Decode function: splits encoded string back into original array
const decode = function(s) {
    let i = 0;
    const res = [];

    while (i < s.length) {
        let j = i;
        while (s[j] !== '#') j++;

        const len = parseInt(s.slice(i, j));
        const str = s.slice(j + 1, j + 1 + len);
        res.push(str);

        i = j + 1 + len;
    }

    return res;
};

// Test Cases
const testCases = [
    ["hello", "world"],
    ["", "abc", ""],
    ["#", "##", "###"],
    ["😀", "🎉🔥", "💻code"],
    []
];

testCases.forEach((test, index) => {
    const encoded = encode(test);
    const decoded = decode(encoded);
    console.log(`\nTest Case ${index + 1}`);
    console.log("Original: ", test);
    console.log("Encoded : ", encoded);
    console.log("Decoded : ", decoded);
});
