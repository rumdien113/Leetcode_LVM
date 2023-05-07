var minMoves = function(nums) {
    var ans = 0
    var min = nums.reduce((min, num) => num < min ? num : min, nums[0])
    for (let i of nums)
      ans += i - min
    return ans
};