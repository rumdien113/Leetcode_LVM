var majorityElement = function(nums) {
    const mp = new Map()
    for (let i = 0; i < nums.length; i++) {
        mp.set(nums[i], (mp.get(nums[i]) || 0) + 1)
        if (mp.get(nums[i]) > nums.length / 2) return nums[i]
    }
};