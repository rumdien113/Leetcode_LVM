var singleNumber = function(nums) {
    const map = new Map()
    nums.forEach((element) => {
        map.set(element, (map.get(element) || 0) +1)
    })
for (const [key, value] of map.entries())
    if (value === 1)
        return key
}