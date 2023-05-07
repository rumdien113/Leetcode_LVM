var guessNumber = function(n) {
    var l = 1, r = n
    while (l <= r) {
        var mid = Math.ceil(l + (r-l)/2)
        var res = guess(mid)
        if (res === 0) return mid
        else if (res < 0) r = mid-1
        else l = mid+1
    }
    return -1
};