class Solution:
    def rob(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return nums[0]
        elif len(nums) == 0:
            return 0
        dp = [0] * (len(nums))
        dp[0] = nums[0]
        dp[1] = nums[1]
        for i in range(2, len(dp)):
            dp[i] = max(dp[0:i-1]) + nums[i]
        return max(dp)