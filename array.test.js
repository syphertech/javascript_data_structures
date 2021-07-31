const ArrayLesson = require('./arrays')


describe("#uniqueStrings", () => {
    test("should return true for unique charaters", () => {
        let arrayData = new ArrayLesson()
        arrayData.data.push(2)
        arrayData.data.push(3)
        arrayData.data.push(4)
        arrayData.data.push(5)
        expect(arrayData.isUnique()).toBe(true)
    })
})