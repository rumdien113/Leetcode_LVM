var getSum = function(a, b) {
    while(b) {
        let add = a & b
        a ^= b
        b = add << 1
    }
    return a
};