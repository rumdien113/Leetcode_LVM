var moveZeroes = function(nums) {
    var cnt = 0, i = 0
    while (i < nums.length) {
    // for (let i = 0; i < nums.length; i++)
        if (!nums[i]) {
            cnt++
            nums.splice(i, 1)
            i--
        }
        i++
    }
    for (let i = 0; i < cnt; i++)
        nums.push(0)
    return nums
};