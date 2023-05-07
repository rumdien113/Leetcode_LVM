var reverseStr = function(s, k) {
    if (s.length <= k)
        return s.split('').reverse().join('')
    let ok = true
    var ans = ''
    let i = 0
    while(i+k <= s.length) {
        if (ok) {
            ans += s.split('').slice(i, i + k).reverse().join('')
            ok = false
        } else {
            ans += s.slice(i, i + k)
            ok = true
        }   
        i += k
    }
    if (!ok) ans += s.slice(i, s.length+1)
    else ans += s.split('').slice(i, s.length+1).reverse().join('')
    return ans
};