/*
Difficulty: Hard
Category: Graph, Breadth-First Search (BFS), Queue

Problem: Given two words, beginWord and endWord, and a dictionary wordList,
 return the length of the shortest transformation sequence from beginWord to endWord, such that:

Only one letter can be changed at a time.
Each transformed word must exist in the word list.
If no such transformation sequence exists, return 0.
*/

function ladderLength(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;

    const queue = [[beginWord, 1]];

    while (queue.length > 0) {
        const [word, level] = queue.shift();

        for (let i = 0; i < word.length; i++) {
            for (let c = 97; c <= 122; c++) {
                const nextWord =
                    word.slice(0, i) + String.fromCharCode(c)
                     + word.slice(i + 1);

                if (wordSet.has(nextWord)) {
                    if (nextWord === endWord) return level + 1;

                    queue.push([nextWord, level + 1]);
                    wordSet.delete(nextWord);
                }
            }
        }
    }

    return 0;
}

// ✅ Test Cases
console.log("Test 1:");
console.log(
    ladderLength("hit", "cog",
         ["hot", "dot", "dog", "lot", "log", "cog"])
); // Expected: 5

console.log("Test 2:");
console.log(
    ladderLength("hit", "cog",
         ["hot", "dot", "dog", "lot", "log"])
); // Expected: 0

console.log("Test 3:");
console.log(
    ladderLength("a", "c", ["a", "b", "c"])
); // Expected: 2
