

function isUnique(arrayData) {
    let size = arrayData.length
    let dset = new Set()
    arrayData.forEach(element => {
        dset.add(element)
    });
    console.log(dset.size)
    console.log(size)
    return (dset.size == size)
}


//console.log(isUnique([1, 2, 3, 4, 4, 4, 5, 6]))


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
class ListNode {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }
    insertAtHead(value) {
        if (this.length == 0) {
            this.head = new ListNode(value)
            this.length++
        }
        else {
            let curr = this.head
            this.head = new ListNode(value)
            this.head.next = curr
            this.length++
        }
    }
    insertAtEnd(value) {
        if (this.length == 0) {
            this.head = new ListNode(value)
            this.length++
            return
        }
        let cur = this.head
        while (cur.next != null) {
            cur = cur.next
        }
        cur.next = new ListNode(value)
    }



    printList() {
        let curr = this.head
        let display = ""

        while (curr != null) {
            display += curr.value + "=>"
            curr = curr.next
        }
        return display
    }

}

function linkedlistFromArrays(arrayData) {

    let llist = new LinkedList()
    arrayData.map(el => {
        llist.insertAtHead(el)

    })
    return llist
}

var addTwoNumbers = function (l1, l2) {
    const totalLinkedList = new LinkedList()
    let carryon = 0
    let sumvalue = 0
    l1 = linkedlistFromArrays(l1)
    l2 = linkedlistFromArrays(l2)

    let q = l1.head
    let p = l2.head


    while (p != null && q != null) {

        if (carryon != 0) {
            //    console.log("Carryon not zero")
            //    console.log(q, p)
            sumvalue = ((q.value + p.value + carryon) % 10)
            //   console.log(`value ${q.value + p.value}`)
            carryon = Math.floor((q.value + p.value + carryon) / 10)


        }
        else {
            console.log("Carryon is zero")
            carryon = Math.floor((q.value + p.value) / 10)
            console.log(`value ${q.value + p.value}`)
            sumvalue = ((q.value + p.value) % 10)
            console.log(`sumvalue ${sumvalue}`)


        }
        let node = new ListNode(sumvalue)
        totalLinkedList.insertAtEnd(sumvalue)
        p = (p.next == null || p == null) ? null : p.next
        q = (q.next == null || q == null) ? null : q.next


    }

    console.log(`total ${totalLinkedList.printList()}`)
    return totalLinkedList

}


let value1 = [2, 4, 3]
let value2 = [5, 6, 4]

console.log(addTwoNumbers(value1, value2))
