var distributeCandies = function(candyType) {
        var n = candyType.length/2
        var set = new Set(candyType)
        return n <= set.size ? n : set.size
};

console.log(distributeCandies([1,1,2,2,3,3]))