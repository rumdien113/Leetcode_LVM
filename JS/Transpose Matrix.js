var transpose = function(matrix) {
    var ans = []
    for (let i = 0; i < matrix[0].length; i++) {
        ans[i] = []
        for (let j = 0; j < matrix.length; j++)
            ans[i][j] = matrix[j][i]
    }
    return ans
};