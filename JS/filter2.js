// var courses = [
//     {
//         name: 'Javascript',
//         coin: 680
//     },
//     {
//         name: 'PHP',
//         coin: 860
//     },
//     {
//         name: 'Ruby',
//         coin: 900
//     }
// ]

// Array.prototype.filter2 = function(callback) {
//     var output = []
//     for (let i in this) {
//         if (this.hasOwnProperty(i)) {
//             var res = callback(this[i], i, this)
//             if (res) {
//                 output.push(this[i])
//             }
//         }
//     }
//     return output
// }

// var filterCourses = courses.filter2(function(course, index, array) {
//     return course.coin > 700;
// })

// console.log(filterCourses)

Array.prototype.myFilter = function(cb) {
    var output = []
    for (let i in this) {
        if (this.hasOwnProperty(i)) {
            var res = cb(this[i], i, this)
            if (res)
                output.push(this[i])
        }
    }
    return output
}
const numbers = [1, 2, 3, 4];

var filterr = numbers.myFilter(function(number, index, array) {
    return number % 2 === 0
})

console.log(filterr)