const BST = require('./BinarySearchTree')



describe("BST implimentation", () => {
    test('should create a Bst with one root', () => {
        let Bst = new BST(5)
        expect(Bst.size()).toBe(1)
    })


    test('should insert value to left', () => {
        let Bst = new BST(70)
        Bst.insert(10)
        expect(Bst.root.left.value).toBe(10)
        expect(Bst.root.right).toBe(null)
    })



    test('should show correct order for dfs', () => {
        let Bst = new BST(15)
        Bst.insert(3)
        Bst.insert(36)
        Bst.insert(2)
        Bst.insert(12)
        Bst.insert(28)
        Bst.insert(39)
        expect(Bst.size()).toBe(7)
        expect(Bst.min()).toBe(2)
        expect(Bst.max()).toBe(39)
        let ans1 = [2, 3, 12, 15, 28, 36, 39]
        let ans2 = [15, 3, 2, 12, 36, 28, 39]
        let ans3 = [2, 12, 3, 28, 39, 36, 15]
        console.log(Bst.dfsPreorder())
        expect(Bst.dfsInorder()).toMatchObject(ans1)
        expect(Bst.dfsPreorder()).toMatchObject(ans2)
        expect(Bst.dfsPostOrder()).toMatchObject(ans3)
    })

    test('should show correct order for bfs', () => {
        let Bst = new BST(15)
        Bst.insert(3)
        Bst.insert(36)
        Bst.insert(2)
        Bst.insert(12)
        Bst.insert(28)
        Bst.insert(39)
        let ans = [15, 3, 36, 2, 12, 28, 39]

        expect(Bst.bfsSearch()).toMatchObject(ans)
    })
});