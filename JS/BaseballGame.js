var calPoints = function(operations) {
    const ans = []
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === '+')
            ans.push(ans[ans.length-2] + ans[ans.length-1])
        else if (operations[i] === 'D')
            ans.push(ans[ans.length-1]*2)
        else if (operations[i] === 'C')
            ans.pop()
        else ans.push(parseInt(operations[i]))
    }
    return ans.reduce((res, curr) => res + curr, 0)
};

console.log(calPoints(["5","-2","4","C","D","9","+","+"]))