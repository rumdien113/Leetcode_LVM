class Solution:
    def maximumProduct(self, nums: List[int]) -> int:
        nums.sort(reverse = True)
        ans1 = nums[0] * nums[1] * nums[2]
        ans2 = nums[0] * nums[len(nums)-1] * nums[len(nums)-2]
        if ans1 > ans2:
            return ans1
        return ans2