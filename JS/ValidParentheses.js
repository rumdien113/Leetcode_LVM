var isValid = function(s) {
    const math = {
            "(" : ")",
            "[" : "]",
            "{" : "}"
        }

        let stack = []
        if (s.length % 2 === 1 ) return false
        if (s[0] === ")" || s[0] === "]" || s[0] === "}" ||
            s[s.length-1] === "(" || s[s.length-1] === "[" || s[s.length-1] === "{")
            return false

        for (let i = 0; i < s.length; i++) {
            if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
                stack.push(s[i])
                // console.log(stack[stack.length-1])
            }
            else if (math[stack.pop()] !== s[i])
                return false
        }
        return stack.length === 0
};

console.log(isValid("()[]{}"))