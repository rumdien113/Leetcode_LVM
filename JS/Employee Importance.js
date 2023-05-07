var GetImportance = function(employees, id) {
    const hashMap = {}
    for (let {id, ...rest} of employees) hashMap[id] = rest
    function dfs(id) {
        let sum = hashMap[id].importance
        for (subId of hashMap[id].subordinates) sum += dfs(subId)
        return sum
    }
    return dfs(id)
}