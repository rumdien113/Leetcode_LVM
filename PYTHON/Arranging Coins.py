class Solution:
    def arrangeCoins(self, n: int) -> int:
        cnt = 1
        ans = 0
        while n > 0:
            n -= cnt
            cnt += 1
            ans += 1
        if n < 0:
            return ans - 1
        return ans