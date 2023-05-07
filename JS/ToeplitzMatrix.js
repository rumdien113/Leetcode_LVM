var isToeplitzMatrix = function(matrix) {
    var ok = true
    for (let i = 0; i < matrix.length-1; i++) {
        for (let j = 0; j < matrix[0].length-1; j++) {
            // if (j === )
            if (matrix[i][j] !== matrix[i+1][j+1]) {
              console.log(matrix[i][j])
              console.log(matrix[i+1][j+1])
              return false
            }
        }
    }
    return ok
};