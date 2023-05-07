var findComplement = function(num) {
    let tmp = num.toString(2);
    let ans = '';
    for (let char of tmp)
        char === '0' ? ans += '1' : ans += '0';
    return parseInt(ans, 2);
};

console.log(findComplement(1));
