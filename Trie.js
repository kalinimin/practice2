/**
 * Seminar 2.5 Simple Trie
 */


class TrieNode {
    constructor(key) {
        this.key = key;
        this.children = {};
        this.isWord = false;
    }
}


class Trie {
    constructor() {
        this.root = new TrieNode(null);
    }

    insert(word) {
        // TODO Insert word symbol by symbol

        let node = this.root;
        for (let i=0; i<word.length; i++){
            const symbol = word[i];
            if (!node.children[symbol]){
                node.children[symbol] = new TrieNode(symbol);
            }
            node = node.children[symbol];
            if (i == word.length - 1){
                node.isWord = true;
            }
        }
    }

    hasNode(word){
        // TODO Check is word in Trie
        let node = this.root;
        for (let i=0; i<word.length; i++){
            const symbol = word[i];
            if (!node.children[symbol]) {
                return false;
            }
            node = node.children[symbol];
        }
        return node.isWord;
    }

    getAllNodes(){
        // TODO returns all nodes as array
        const nodes = [];
        if (!this.root){
            return nodes;
        }

        const queue = [this.root];
        while (queue.length>0){
            const currentNode = queue.shift()
            nodes.push(currentNode);
            for (const i in currentNode.children){
                queue.push(currentNode.children[i]);
            }
        }

        return nodes;
    }
}

module.exports = { Trie };
