var isMonotonic = function(nums) {
    var ok1 = true, ok2 = true
    for (let i = 1; i < nums.length; i++) {
       if (nums[i] < nums[i-1]) ok1 = false
       if (nums[i] > nums[i-1]) ok2 = false
    }
    return (ok1 || ok2)
};