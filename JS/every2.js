// var courses = [
//     {
//         name: 'Javascript',
//         coin: 680,
//         inFinish: true
//     },
//     {
//         name: 'PHP',
//         coin: 860,
//         inFinish: true
//     },
//     {
//         name: 'Ruby',
//         coin: 900,
//         inFinish: true
//     }
// ]

// Array.prototype.every2 = function(callback) {
//     for (let i in this)
//         if (this.hasOwnProperty(i)) {
//             var res = callback(this[i], i, this)
//             if (!res)
//                 return false
//         }
//     return true
// }

// var result = courses.every2(function(course, index, array) {
//     return course.coin > 680
// })

// console.log(result)

Array.prototype.myEvery = function(cb) {
    for (let i in this)
        if (this.hasOwnProperty(i)) {
            var res = cb(this[i], i, this)
            if (!res)
                return false
        }
    return true
}
const numbers = [1, 3, 3, 5];
var ans = numbers.myEvery(function(number, index, array) {
    return index % 2 !== 0
})

console.log(ans)