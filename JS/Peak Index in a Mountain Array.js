var peakIndexInMountainArray = function(arr) {
    // for (let i = 1; i < arr.length-1; i++) {
    //     if (arr[i-1] < arr[i] && arr[i] > arr[i+1])
    //     return i
    // }
    let left = 0
    let right = arr.length - 1
    while(left < right) {
        let mid = left + Math.floor((right-left) /2)
        if (arr[mid] > arr[mid+1])
            right = mid
        else left = mid+1
    }
    return right
};