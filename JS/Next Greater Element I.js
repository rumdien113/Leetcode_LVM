var nextGreaterElement = function(nums1, nums2) {
    var ans = []
    for (let x of nums1) {
        var index = nums2.indexOf(x)+1
        if (index === nums2.length)
            ans.push(-1)
        else if (x < nums2[index])
            ans.push(nums2[index])
        else {
            while(index < nums2.length) {
            // for (let j = index; j < nums2.length; j++)
                if (x < nums2[index]) {
                    ans.push(nums2[index])
                    break
                }
                index++
            }
            if (index === nums2.length)
                ans.push(-1)
        }
    }
    return ans
};