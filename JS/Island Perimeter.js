var islandPerimeter = function(grid) {
    var ans = 0, n = grid.length
    for (let i = 0; i < n; i++) 
        for (let j = 0; j < grid[0].length; j++)
            if (grid[i][j] === 1) {
                if (!i || !grid[i-1][j]) ans++ //bottom
                if (i === n-1 || !grid[i+1][j]) ans++ //top
                if (!j || !grid[i][j-1]) ans++ //left
                if (j === grid[i].length-1 || !grid[i][j+1]) ans++ //right
            }
    return ans
};