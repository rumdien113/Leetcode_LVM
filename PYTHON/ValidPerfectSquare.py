class Solution:
    def isPerfectSquare(self, num: int) -> bool:
        if num == 1:
            return True
        l = 2
        r = num
        while l < r:
            mid = l + (r-l)//2
            res = mid * mid
            if res == num:
                return True
            elif res > num:
                r = mid
            else:
                l = mid +1
        return False
print(Solution().isPerfectSquare(16))