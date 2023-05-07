var countPrimeSetBits = function(left, right) {
    var check = prime()
    var ans = 0
    for (let i = left; i <= right; i++) {
        var str = i.toString(2)
        var cnt = str.split('').reduce((acc, cur) =>
            cur === '1' ? ++acc : acc, 0
        )
        if (check[cnt]) ans++
    }
    return ans
};

var prime = function() {
    var n = 1000000
    var check = Array(n+1).fill(true)
    check[0] = false, check[1] = false
    for (let i = 2; i <= n; i++)
        if (check[i])
            for (let j = 2*i; j <= n; j+=i)
                check[j] = false
    return check
}

console.log(countPrimeSetBits(6, 10))
// var check = prime()
// // console.log(check)
// for (let i = 0; i < 21; i++)
//     if (check[i])
//         console.log(i)