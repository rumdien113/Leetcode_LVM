class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        ans = 0
        mi = 1e5
        for i in range(len(prices)):
            if prices[i] < mi:
                mi = prices[i]
            else:
                ans = max(ans, prices[i]-mi)
        return ans