var maxProfit = function(prices) {
    var profit = 0
    for (let i = 1; i < prices.length; i++)
        if (prices[i] > prices[i-1])
            profit += Math.max(prices[i] - prices[i-1])
    return profit
};