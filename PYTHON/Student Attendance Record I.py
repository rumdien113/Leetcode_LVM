class Solution:
    def checkRecord(self, s: str) -> bool:
        ok = 0
        charA = 0
        for x in range(len(s)):
            if s[x] == "A":
                charA += 1
            if (ok == 0 and s[x] == "L") or (s[x-1] == "L" and s[x] == "L"):
                ok += 1
            else:
                ok = 0
            if ok == 3:
                return False
        if (charA > 1):
            return False
        return True