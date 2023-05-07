from typing import List
import collections
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        counter = collections.Counter(nums)
        if (max(counter.values()) >= 2):
            return True
        return False