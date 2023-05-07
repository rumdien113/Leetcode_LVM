class Solution:
    def findLengthOfLCIS(self, nums: List[int]) -> int:
        ans = 1
        ma = 1
        for i in range(len(nums)-1):
            if nums[i] < nums[i+1]:
                ma += 1
            else:
                ma = 1
            ans = max(ans, ma)
        return ans