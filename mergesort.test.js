const { TestWatcher } = require("jest")
const mergeSort = require("./mergeSort");
const quicksort = require("./quickSort")

describe("Testing mergesort", () => {
    test("testing mergesot on array", () => {
        let myarray = [4, 2, 5, 7, 1, 0, 6, 5]
        let sortedArray = mergeSort(myarray)
        let ans = [0, 1, 2, 4, 5, 5, 6, 7]
        console.log(sortedArray)
        expect(sortedArray).toMatchObject(ans)
    })
})



describe("Testing Quicksort", () => {
    test("testing quick on array", () => {
        let myarray = [4, 2, 5, 7, 1, 0, 6, 5]
        let sortedArray = quicksort(myarray)
        let ans = [0, 1, 2, 4, 5, 5, 6, 7]
        console.log(sortedArray)
        expect(sortedArray).toMatchObject(ans)
    })
})