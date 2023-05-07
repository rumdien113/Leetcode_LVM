var detectCapitalUse = function(word) {
    var words = word.split('')
    var ok = (words[0] <= 'Z' && words[0] >= 'A') ? true : false
    var cnt = 0
    for (let x of words)
        if (x <= 'Z' && x >= 'A') cnt++
    if (cnt === word.length) return true
    else if (cnt === 1 && ok == 1) return true
    else if (!cnt) return true
    return false
};