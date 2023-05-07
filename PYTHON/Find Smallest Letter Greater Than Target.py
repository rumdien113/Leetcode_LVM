class Solution:
    def nextGreatestLetter(self, letters: List[str], target: str) -> str:
        # if target > letters[len(letters)-1]:
        for i in letters:
            if (i > target):
                return i
        return letters[0]