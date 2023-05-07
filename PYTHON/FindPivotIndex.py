from typing import List
class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        n = len(nums)
        l = 0
        r = sum(nums)
        for i in range(len(nums)):
            r -= nums[i]
            if (l == r):
                return i
            l += nums[i]
        return -1
print(Solution().pivotIndex([1,2,3]))