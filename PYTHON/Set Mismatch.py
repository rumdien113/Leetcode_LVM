class Solution:
    def findErrorNums(self, nums: List[int]) -> List[int]:
        d = [0] * (len(nums)+1)
        ans = []
        nums.sort()
        for x in nums:
            d[x] += 1
        d.remove(d[0])
        for x in range(len(d)):
            if d[x] == 2:
                ans.append(x+1)
                break
        for x in range(len(d)):
            if d[x] == 0:
                ans.append(x+1)
                break
        return ans