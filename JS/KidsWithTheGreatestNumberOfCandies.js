var kidsWithCandies = function(candies, extraCandies) {
    const res = [];
    var maxx = Math.max(...candies)
    for (let i = 0; i < candies.length; i++)
        if (candies[i] + extraCandies >= maxx)
            res.push(true);
        else res.push(false);
    return res
};

console.log(kidsWithCandies([2,3,5,1,3], 3))