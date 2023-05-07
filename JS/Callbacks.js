var courses = [
    'java',
    'python',
    'PHP'
]

Array.prototype.map2 = function(callback) {
    var output = [], len = this.length;
    for (var i = 0; i < len; i++) {
        var result = callback(this[i], i)
        output.push(result)
    }
    return output
}

var html = courses.map2(function(course) {
    return `<h2>${course}</h2>`
})

console.log(html.join(''))