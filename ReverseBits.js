/*
Difficulty: Easy
Category: Bit Manipulation

Problem: Reverse bits of a given 32 bits unsigned integer.
*/
function reverseBits(n) {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        result <<= 1;
        result |= n & 1;
        n >>>= 1;
    }
    return result >>> 0;
}

// Test Cases

// Helper to convert decimal to 32-bit binary string
function toBinary(n) {
    return n.toString(2).padStart(32, '0');
}

// Input: 43261596 => binary: 00000010100101000001111010011100
let input = 43261596;
let output = reverseBits(input);
console.log(`Input: ${input}`);
console.log(`Input in binary: ${toBinary(input)}`);
console.log(`Reversed binary: ${toBinary(output)}`);
console.log(`Reversed Output: ${output}`); // Expected: 964176192

// Input: 4294967293 => binary: 11111111111111111111111111111101
input = 4294967293;
output = reverseBits(input);
console.log(`\nInput: ${input}`);
console.log(`Input in binary: ${toBinary(input)}`);
console.log(`Reversed binary: ${toBinary(output)}`);
console.log(`Reversed Output: ${output}`); // Expected: 3221225471
