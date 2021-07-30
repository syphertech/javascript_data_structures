const { TestWatcher } = require('jest')
const binarySearch = require('./binarySearch')


test('testing to find 8', () => {
    let array = [2, 4, 6, 7, 8, 9, 12, 14]
    let left = array[0]
    let right = array[array.length - 1]
    expect(binarySearch(array, 4, left, right)).toBe(1)

})

