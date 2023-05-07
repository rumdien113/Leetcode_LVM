class Solution:
    def longestPalindrome(self, s: str) -> int:
        oddCnt = 0
        d = {}
        for x in s:
            if x in d:
                d[x] += 1
            else:
                d[x] = 1
            if (d[x] % 2 == 1):
                oddCnt += 1
            else:
                oddCnt -= 1
        if oddCnt > 1:
            return len(s) - oddCnt + 1
        else:
            return len(s)