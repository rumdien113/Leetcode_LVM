class Solution:
    def getRow(self, rowIndex: int) -> List[int]:
        ans = []
        ans.append(1)
        if rowIndex == 0:
            return ans
        prev = Solution().getRow(rowIndex - 1)
        for i in range(1, len(prev)):
            curr = prev[i-1] + prev[i]
            ans.append(curr)
        ans.append(1)
        return ans