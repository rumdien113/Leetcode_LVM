var hasAlternatingBits = function(n) {
    var bit = n.toString(2).split('');
    for (let i = 0; i < bit.length -1; i++)
        if ((bit[i] === '0' && bit[i+1] === '0') || (bit[i] === '1' && bit[i+1] === '1'))
            return false
    return true
};