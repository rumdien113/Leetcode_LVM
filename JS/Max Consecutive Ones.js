var findMaxConsecutiveOnes = function(nums) {
    var ans = 0
    let cnt = 0
    for (let i = 0; i < nums.length; i++)
        if (nums[i] === 1)
            cnt++
        else if (nums[i] === 0) {
            ans = Math.max(ans, cnt)
            cnt = 0
        }
    ans = Math.max(ans, cnt)
    return ans
};