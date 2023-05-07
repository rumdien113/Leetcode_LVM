class Solution:
    def addStrings(self, num1: str, num2: str) -> str:
        #set cho num1 là xâu dài nhất
        if len(num2) > len(num1):
            num1, num2 = num2, num1

        n = len(num1) - 1
        miss = 0
        ans = [0] * (n + 2)

        for i, x in enumerate(num1[::-1]):
            x = int(x)
            y = int(num2[::-1][i]) if i < len(num2) else 0
            tmp = x + y + miss
            ans[n-i+1] = tmp % 10
            miss = tmp // 10

        if miss:
            ans[0] = miss

        return ''.join(map(str, ans)).lstrip('0') or '0'