var selfDividingNumbers = function(left, right) {
    const res = [];
    var value, cnt = 0;
    for (var i = left; i <= right; i++) { 
        value = i.toString();
        cnt = 0;
        for (var j = 0; j < value.length; j++)
            if (i % parseInt(value[j]) === 0)
                cnt++;
        if (cnt === value.length)
            res.push(i);
    }
    return res;
};

// var isSelfDividing = function(num) {
//     const arr = num.toString().split('');
//     for (let i = 0; i < arr.length; i++) 
//         if (num % arr[i] != 0)
//             return false;
//     return true;
// }

console.log(selfDividingNumbers(47, 85))