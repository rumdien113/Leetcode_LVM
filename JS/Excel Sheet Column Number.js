var titleToNumber = function(columnTitle) {
    var ans = 0
    for (let x of columnTitle) {
        var value = x.charCodeAt() - 'A'.charCodeAt() + 1
        ans = ans * 26 + value
    }
    return ans
};