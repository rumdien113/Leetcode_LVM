from typing import List
class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        tmp = 0
        digits.reverse()
        digits.append(0)
        digits[0] += 1
        for i in range(len(digits)):
            digits[i] += tmp
            tmp = digits[i] // 10
            digits[i] %= 10
            if tmp == 0:
                break
        digits.reverse()
        if digits[0] == 0:
            digits.remove(digits[0])
        return digits

print(Solution().plusOne([1,2,3]))