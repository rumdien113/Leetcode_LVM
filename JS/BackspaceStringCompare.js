var backspaceCompare = function(s, t) {
    if (check(s) === check(t))
        return true        
    return false
};

var check = function(str) {
    var stack = [];
    for (let i = 0; i < str.length; i++)
        if (str[i] === '#')
            stack.pop()
        else 
            stack.push(str[i])
    return stack.join('')
}

console.log(backspaceCompare('ab##', 'c#d#'))