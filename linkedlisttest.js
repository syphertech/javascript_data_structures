
// const { fromValeues } = require("./Linkedlist")
// const LinkedList = require("./Linkedlist")


// require("./Linkedlist")


// describe('insert athead', () => {
//     test('it add node value to head ', () => {
//         const linkedlist = new LinkedList()
//         linkedlist.insertAthead(10)
//         const oldHead = linkedlist.head
//         linkedlist.insertAthead(30)
//         expect(linkedlist.head.value).toBe(30)
//         expect(linkedlist.head.next).toBe(oldHead)
//         expect(linkedlist.length).toBe(2)

//     })

//     describe('#getByIndex', () => {
//         describe("whith index less than 0", () => {
//             test('it add node value to head ', () => {
//                 const lKList = LinkedList.fromValeues(20, 30, 40, 50, 60)
//                 expect(lKList.getByIndex(-1)).toBe(null)
//             })
//         })

//     })
//     describe("whith index in the midddle", () => {
//         test('should return value at index ', () => {
//             const lKList = LinkedList.fromValeues(20, 30, 40, 50, 60)
//             expect(lKList.getByIndex(2).value).toBe(40)
//         })
//     })


//     describe("whith index at 0 ", () => {
//         test('should return the head element ', () => {
//             const lKList = LinkedList.fromValeues(20, 30, 40, 50, 60)
//             expect(lKList.getByIndex(0).value).toBe(20)
//         })
//     })


// })



// describe('#insertAtIndex', () => {

//     describe("insert value at  index at 0 ", () => {
//         test('should return the head element ', () => {
//             const lKList = LinkedList.fromValeues(20, 30, 40, 50, 60)
//             lKList.insertAtIndex(0, 1000)
//             expect(lKList.head.value).toBe(1000)
//             expect(lKList.head.next.value).toBe(20)
//             expect(lKList.length).toBe(6)
//         })
//     })


//     describe("insert value at  index in middle ", () => {
//         test('should return the head element ', () => {
//             const el = LinkedList.fromValeues(10, 20, 50, 60)
//             el.insertAtIndex(2, 100)
//             let node = el.getByIndex(2)
//             expect(node.value).toBe(100)

//             expect(node.next.value).toBe(50)
//             expect(el.length).toBe(5)
//         })
//     })


//     describe("insert value at  index in greater then lenght of linked list ", () => {
//         test('should return the null element ', () => {
//             const el = LinkedList.fromValeues(10, 20)
//             el.insertAtIndex(10, 60)
//             expect(el.length).toBe(2)
//         })
//     })

//     describe("insert at index less that 0", () => {
//         test("should not change lenght of linkedlist", () => {
//             const el = LinkedList.fromValeues(10, 20)
//             el.insertAtIndex(-10, 60)
//             expect(el.length).toBe(2)
//         })
//     })
// })


// describe('#removeAtHead', () => {
//     describe('should remove node from head', () => {
//         test("removes from head", () => {
//             const el = LinkedList.fromValeues(10, 20, 30)
//             el.removeAtHead()
//             expect(el.length).toBe(2)
//         })
//     })


// })

// describe('#removeAtIndex', () => {
//     describe("remove value at  index at 0 ", () => {
//         test('should return the  new head element ', () => {
//             const lKList = LinkedList.fromValeues(20, 30, 40, 50, 60)
//             lKList.removeAtIndex(0)
//             expect(lKList.head.value).toBe(30)
//             expect(lKList.head.next.value).toBe(40)
//             expect(lKList.length).toBe(4)
//         })
//     })


//     describe("remove value at  index in middle ", () => {
//         test('should return the new  element at index ', () => {
//             const el = LinkedList.fromValeues(10, 20, 50, 60)
//             el.removeAtIndex(2)
//             let node = el.getByIndex(2)

//             expect(node.value).toBe(60)


//             expect(el.length).toBe(3)
//         })
//     })


//     describe("remove value at  index in greater then lenght of linked list ", () => {
//         test('should return the null element ', () => {
//             const el = LinkedList.fromValeues(10, 20)
//             el.removeAtIndex(10)
//             expect(el.length).toBe(2)
//         })
//     })

//     describe("remove at index less that 0", () => {
//         test("should not change lenght of linkedlist", () => {
//             const el = LinkedList.fromValeues(10, 20)
//             el.removeAtIndex(-10)
//             expect(el.length).toBe(2)
//         })
//     })
// })