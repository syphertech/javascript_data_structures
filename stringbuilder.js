function StringBuilder(value) {
    this.strings = new Array("")
    this.strings.push(value)

}

StringBuilder.prototype.append = function (value) {
    if (value) {
        this.strings.push(value)
    }
}

StringBuilder.prototype.clear = function () {
    this.strings.length = 1
}

StringBuilder.prototype.toString = function () {
    return this.strings.join("")
}



let buildstring = new StringBuilder()
buildstring.append("this is my first day at school ")
console.log(buildstring.toString())
buildstring.append("I am a boy")
console.log(buildstring.toString())
buildstring.clear()
console.log(buildstring.toString())