const quicksort = (array) => {
    if (array.length <= 1) {
        return array
    }
    let tempArray = array
    let pivot = tempArray.pop()
    let leftArray = []
    let rightArray = []

    tempArray.forEach(el => {
        (el < pivot) ? leftArray.push(el) : rightArray.push(el)
    })


    return [...quicksort(leftArray), pivot, ...quicksort(rightArray)]


}


module.exports = quicksort;