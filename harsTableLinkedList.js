
const LinkedList = require("./Linkedlist")
const Node = require("./Linkedlist")




class HarshtableLinkedList {
    constructor() {
        this.buckets = new Array(1000)
        this.size = 0
    }

    harsh(key) {
        return key.toString().length % this.buckets.length
    }

    setItem(key, value) {
        let index = this.harsh(key)

        if (!this.buckets[index]) {
            let bucket = new LinkedList()
            this.buckets[index] = bucket

        }
        let node = new Node([key, value])
        let temp = new Node("")
        temp.next = this.buckets[index].head
        this.buckets[index]?.insertAthead(node)
        this.size++
    }

}
let mapTest = new HarshtableLinkedList()
mapTest.setItem("maxwell", 28)
mapTest.setItem("paul", 30)
