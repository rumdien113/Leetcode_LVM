var romanToInt = function(s) {
    const symbol = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    };
    let result = 0
    for (let x = 0; x < s.length; x++) {
        // console.log(symbol[s[x]])
        if (symbol[s[x]] < symbol[s[x+1]])
            result -= symbol[s[x]]
        else result += symbol[s[x]]
    }
    return result;
};
console.log(romanToInt("MCMXCIV"))