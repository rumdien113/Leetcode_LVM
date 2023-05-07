var uncommonFromSentences = function(s1, s2) {
    var ans = []
    var words = s1.split(' ').concat(s2.split(' '))
    const map = new Map()
    words.forEach((element) => {
        map.set(element, (map.get(element) || 0) +1)
    })
    for (const [key, value] of map.entries())
        if (value === 1)
            ans.push(key)
    return ans
};