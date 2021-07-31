class Node {
    constructor() {
        this.children = new Map()
        this.end = false;
    }
    setEnd(value = true) {
        this.end = value
    }
    getEnd() {
        return this.end
    }
}

class Trie {
    constructor() {
        this.root = new Node()
    }

    add(word, node = this.root) {
        if (word.length == 0) {
            node.setEnd()
            return;
        }
        else if (!node.children.has(word[0])) {
            node.children.set(word[0], new Node())
            return this.add(word.substr(1), node.children.get(word[0]))
        }
        else {
            return this.add(word.substr(1), node.children.get[word[0]])
        }

    }
    //https://www.surveymonkey.com/r/V5X6GZD
    isWord(word) {
        let node = this.root
        while (word.length > 1) {
            if (!node.children.has(word[0])) {
                return false
            }
            else {
                node = node.children.get(word[0])
                word = word.substr(1)
            }
        }
        return (node.children.has(word[0]) && node.children.get(word[0]).getEnd() ? true : false)
    }

    //check if phrase exist in troe
    exist(word) {
        let node = this.root
        while (word.length > 0) {
            if (!node.children.has(word[0])) {
                return false
            }
            else {
                node = node.children.get(word[0])
                word = word.substr(1)
            }
        }
        return true
    }


    delete(word) {
        let node = this.root
        debugger
        while (word.length > 0) {
            if (!node.children.has(word[0])) {
                return false
            }
            else {
                node = node.children.get(word[0])
                word = word.substr(1)
            }

        }
        node.setEnd(false)
        return true
    }
}




module.exports = Trie