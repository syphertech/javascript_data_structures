
const Trie = require('./Trie');



describe(" creating a Trie and using it", () => {
    test('word exist', () => {
        let mydata = new Trie()
        mydata.add("Hello")
        mydata.add("friend")
        mydata.add("hi")
        mydata.add("help")
        expect(mydata.isWord("hi")).toBe(true)
        expect(mydata.isWord("hel")).toBe(false)
    })


    test("substring exist", () => {
        let mydata = new Trie()
        mydata.add("Hello")
        mydata.add("friend")
        mydata.add("hi")
        mydata.add("help")
        expect(mydata.exist('frie')).toBe(true)
        expect(mydata.exist('ca')).toBe(false)
    })


    test("test delete ", () => {
        let mydata = new Trie()
        mydata.add("Hello")
        mydata.add("friend")
        mydata.add("hi")
        mydata.add("help")
        expect(mydata.exist('Hello')).toBe(true)
        mydata.delete('Hello')
        expect(mydata.isWord('Hello')).toBe(false)
    })
})