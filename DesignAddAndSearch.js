/*
Difficulty: Medium
Category: Design, Trie, Depth-First Search (DFS)'
Problem : Design a data structure that supports adding new words and finding if a string matches any 
previously added string.
*/

class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    addWord(word) {
        let node = this.root;
        for (let ch of word) {
            if (!node.children[ch]) {
                node.children[ch] = new TrieNode();
            }
            node = node.children[ch];
        }
        node.isEnd = true;
    }

    search(word) {
        const dfs = (node, i) => {
            if (i === word.length) return node.isEnd;

            const ch = word[i];
            if (ch === ".") {
                for (let child of Object.values(node.children)) {
                    if (dfs(child, i + 1)) return true;
                }
                return false;
            } else {
                if (!node.children[ch]) return false;
                return dfs(node.children[ch], i + 1);
            }
        };

        return dfs(this.root, 0);
    }
}

// Test cases
const wd = new WordDictionary();

wd.addWord("bad");
wd.addWord("dad");
wd.addWord("mad");

console.log(wd.search("pad")); // false
console.log(wd.search("bad")); // true
console.log(wd.search(".ad")); // true
console.log(wd.search("b..")); // true
console.log(wd.search("...")); // true
console.log(wd.search("....")); // false

