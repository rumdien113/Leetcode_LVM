var findDisappearedNumbers = function(nums) {
    var ans = []
    var maxx = Math.max(...nums)
    var n = (maxx > nums.length) ? maxx : nums.length
    for (let i = 1; i <= n; i++)
        if (!nums.includes(i))
            ans.push(i)
    return ans
};