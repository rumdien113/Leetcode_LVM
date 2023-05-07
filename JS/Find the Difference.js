var findTheDifference = function(s, t) {
    const check = {}
    for (let char of s)
        check[char] = (check[char] || 0) + 1
    for (let char of t) {
        check[char] = (check[char] || 0) - 1
        if (check[char] < 0)
            return char
    }
};
