from typing import List
import collections
class Solution:
    def findShortestSubArray(self, nums: List[int]) -> int:
        f = collections.Counter(nums)
        d = max(f.values())
        if d == 1:
            return (1)
        nums_f = [n for n in f if f[n] == d]
        ans = len(nums)
        for n in nums_f:
            l = nums.index(n)
            r = len(nums) - nums[::-1].index(n)
            ans = min(ans, r - l)
        return ans
print(Solution().findShortestSubArray([1,2,2,3,1]))