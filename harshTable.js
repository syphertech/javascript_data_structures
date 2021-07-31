class Harshtable {
    constructor(size = 50) {
        this.buckets = new Array(size)
        this.size = size
    }

    harsh(key) {
        return key.toString.length % this.size
    }

    setItem(key, value) {
        let index = this.harsh(key)
        if (!this.buckets[index]) {
            this.buckets[index] = []
        }
        this.buckets[index].push([key, value])
        return index
    }

    getItem(key) {
        let index = this.harsh(key)
        if (!this.buckets[index]) { return null }
        for (let bucket of this.buckets[index]) {
            if (bucket[0] === key) {
                return bucket[1]
            }
        }
    }

    hasItem(key) {
        let index = this.harsh(key)
        if (!this.buckets[index]) { return false }
        for (let bucket of this.buckets[index]) {
            if (bucket[0] === key) {
                return true
            }
        }
        return false
    }

    deleteItem(key) {
        let index = this.harsh(key)
        if (!this.buckets[index]) { return }
        for (let bucket of this.buckets[index]) {
            if (bucket[0] === key) {
                bucket[0] = null
                bucket[1] = null
                return
            }
        }
    }

}

let mapvalue = new Harshtable()
mapvalue.setItem("maxwell", 28)
mapvalue.setItem("mia", 25)
console.log(mapvalue.getItem("maxwell"))
console.log(mapvalue.hasItem("paul"))
console.log(mapvalue.hasItem("mia"))
console.log(mapvalue.hasItem("maxwell"))
console.log(mapvalue.deleteItem("maxwell"))
console.log("deleted" + mapvalue.hasItem("maxwell"))