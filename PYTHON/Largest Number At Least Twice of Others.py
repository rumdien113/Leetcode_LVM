class Solution:
    def dominantIndex(self, nums: List[int]) -> int:
        t = sorted(nums, reverse = True)
        m = t[0]
        n = t[1]
        if m >= n*2:
            return nums.index(m)
        return -1
