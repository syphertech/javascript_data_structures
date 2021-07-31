
const merge = (leftArray, rightArray) => {
    const result = []
    while (leftArray.length > 0 && rightArray.length > 0) {
        if (leftArray[0] < rightArray[0]) {
            result.push(leftArray.shift())
        }
        else {
            result.push(rightArray.shift())
        }
    }

    return [...result, ...leftArray, ...rightArray]
}

//recursive
const mergeSort = (array) => {
    if (array.length == 1) {
        return array
    }

    const middleIndex = Math.floor(array.length / 2)
    const leftArray = array.slice(0, middleIndex)
    const rightArray = array.slice(middleIndex)

    return merge(mergeSort(leftArray), mergeSort(rightArray))
}



module.exports = mergeSort;