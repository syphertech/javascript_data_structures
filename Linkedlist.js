class LinkedList {
    constructor() {
        this.head = null
        this.length = 0;
    }

    insertAthead(data) {
        const nodeEl = new Node(data, this.head)
        this.head = nodeEl
        this.length++
        return this.head
    }

    getByIndex(index) {
        let current = this.head
        if (index == 0) {
            return current
        }
        else if (index < 0 || index > this.length - 1) {
            return null
        }
        while (index > 0) {
            current = current.next
            index--

        }
        return current
    }

    insertAtIndex(index, value) {
        let current = this.head
        if (index === 0) {
            return this.insertAthead(value)
        }
        else if (index < 0 || index > this.length - 1) {
            return null
        }
        else {
            // 2 3 4 5
            const prev = this.getByIndex(index - 1)
            if (prev == null) {
                return null
            }
            prev.next = new Node(value, prev.next)
            this.length++

        }

        return current.value
    }

    removeAtHead() {
        this.head = this.head.next
        this.length--
    }


    removeAtIndex(index) {
        let current = this.head
        if (index === 0) {
            return this.removeAtHead()
        }
        else if (index < 0 || index > this.length - 1) {
            return null
        }
        else {
            // 2 3 4 5
            const delNode = this.getByIndex(index - 1)
            const prev = this.getByIndex(index - 2)
            if (prev == null) {
                return null
            }
            prev.next = prev.next.next
            delNode.next = null
            this.length--

        }

        return current.value
    }

    print() {
        let current = this.head
        let output = ""
        while (current) {
            output = `${output}${current.value}=>`
            current = current.next
        }
        return output
    }
}

class Node {
    constructor(value, next) {
        this.next = next
        this.value = value
    }
}

LinkedList.fromValeues = function (...values) {
    const el = new LinkedList()
    values = values.reverse()
    values.forEach((value) => {
        el.insertAthead(value)
    })
    return el
}

module.exports = LinkedList
module.exports = Node
