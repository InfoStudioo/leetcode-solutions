/*Difficulty: Medium
 Category: Design, Trie, Data Structures
 Problem: Implement the Trie class:
Trie() Initializes the trie object.
void insert(String word) Inserts the string word into the trie.
boolean search(String word) Returns true if the string word is 
in the trie (i.e., was inserted before), and false otherwise.
boolean startsWith(String prefix) Returns true if there is a 
previously inserted string word that has the prefix prefix, and false otherwise.
*/

class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word) {
        let node = this._findNode(word);
        return node !== null && node.isEndOfWord;
    }

    startsWith(prefix) {
        return this._findNode(prefix) !== null;
    }

    _findNode(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) return null;
            node = node.children[char];
        }
        return node;
    }
}

// ✅ Test the Trie
function testTrie() {
    const trie = new Trie();

    trie.insert("apple");
    console.log("search('apple') →", trie.search("apple")); // true
    console.log("search('app') →", trie.search("app"));     // false
    console.log("startsWith('app') →", trie.startsWith("app")); // true

    trie.insert("app");
    console.log("search('app') →", trie.search("app"));     // true
}

testTrie();
