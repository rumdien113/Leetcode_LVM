var longestCommonPrefix = function(strs) {
    if (!strs.length) {
        return '';
      }
    let res = ''
    for (let x = 0; x < strs[0].length; x++) {
        for (let i = 1; i < strs.length; i++)
            // console.log(strs[i])
            if (x == i.length-1 || strs[i][x] != strs[0][x])
                return res;
        res += strs[0][x];
    }
    return res
};

console.log(longestCommonPrefix(["flower","flow","flight"]))