class Solution:
    def reverseVowels(self, s: str) -> str:
        vo = 'aiueo'
        l = 0
        r = len(s)-1
        s = list(s)
        while l < r:
            if (s[l] in vo) and (s[r] in vo):
                s[l], s[r] = s[r], s[l]
                l += 1
                r -= 1
            if s[l] not in vo:
                l += 1
            if s[r] not in vo:
                r -= 1
        return ''.join(s)
print(Solution().reverseVowels("leetcode"))