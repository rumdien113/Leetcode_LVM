var numJewelsInStones = function(jewels, stones) {
    var res = 0;
    for (let i = 0; i < jewels.length; i++)
        for (let j = 0; j < stones.length; j++) 
            if (jewels[i] === stones[j])
                res++;
    return res;
};