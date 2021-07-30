

function binarySearch(array, value, left, right) {


    if (left > right) {
        return -1
    }
    let mid = Math.floor((array.length) / 2)

    if (value == array[mid]) {
        return mid
    }

    if (value < array[mid]) {
        return binarySearch(array, value, left, mid - 1)
    }
    else {
        return binarySearch(array, value, mid + 1, right)
    }


}

module.exports = binarySearch