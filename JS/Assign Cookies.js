var findContentChildren = function(g, s) {
    var ans = 0, j = 0
    g.sort((a, b) => a-b)
    s.sort((a, b) => a-b)
    while(ans <= g.length && j <= s.length) {
        if (g[ans] <= s[j]) ans++
        j++
    }
    return ans
};