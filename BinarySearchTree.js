class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}


class BinarySearchTree {
    constructor(value) {
        this.root = new Node(value)
        this.count = 1;
    }


    insert(value) {
        this.count++
        let tempNode = new Node(value)

        const searchTree = node => {
            if (value < node.value) {
                if (!node.left) {
                    node.left = tempNode

                }
                else {
                    searchTree(node.left)
                }
            }
            else if (value > node.value) {
                if (!node.right) {
                    node.right = tempNode

                }
                else {
                    searchTree(node.right)
                }
            }
        }

        searchTree(this.root)

    }


    size() {
        return this.count
    }


    min() {
        let cur = this.root
        while (cur.left) {
            cur = cur.left
        }
        return cur.value
    }


    max() {
        let cur = this.root
        while (cur.right) {
            cur = cur.right
        }
        return cur.value
    }

    contains(value) {
        let currentNode = this.root
        if (currentNode.value === this.root.value) {
            return true
        }
        while (currentNode) {
            if (currentNode.value === value) {
                return true
            }
            if (value < currentNode.value) {
                currentNode = currentNode.left
            }
            else {
                currentNode = currentNode.right
            }
        }
        return false
    }



    //inorder DFS
    //left root right
    dfsInorder() {
        let result = []

        const traverse = node => {
            if (node.left) {
                traverse(node.left)
            } result.push(node.value)
            if (node.right) {
                traverse(node.right)
            }

        }
        traverse(this.root)
        return result
    }

    // root left right
    dfsPreorder() {
        let result = []

        const traverse = node => {
            result.push(node.value) //capture root first
            if (node.left) {          // if left exist go to left
                traverse(node.left)
            }
            if (node.right) {
                traverse(node.right) //if right go to right
            }

        }
        traverse(this.root)
        return result
    }


    //left right root
    dfsPostOrder() {
        let result = []

        const traverse = node => {

            if (node.left) {          // if left exist go to left
                traverse(node.left)
            }
            if (node.right) {
                traverse(node.right) //if right go to right
            }
            result.push(node.value) //capture root first
        }
        traverse(this.root)
        return result
    }


    bfsSearch() {
        let result = []
        let queque = []

        queque.push(this.root)

        while (queque.length) {
            let current = queque.shift()
            result.push(current.value)
            if (current.left) {
                queque.push(current.left)
            }
            if (current.right) {
                queque.push(current.right)
            }
        }


        return result
    }

}

// bfs 








module.exports = BinarySearchTree;