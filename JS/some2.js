var courses = [
    {
        name: 'Javascript',
        coin: 680,
        inFinish: false
    },
    {
        name: 'PHP',
        coin: 860,
        inFinish: false
    },
    {
        name: 'Ruby',
        coin: 900,
        inFinish: true
    }
]

Array.prototype.some2 = function(callback) {
    for (var i in this)
        if (this.hasOwnProperty(i))
            if (callback(this[i], i, this)) 
                return true
    return false
}

var res = courses.some2(function(course, index, array) {
    return course.inFinish
})

console.log(res)