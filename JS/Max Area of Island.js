var maxAreaOfIsland = function(grid) {
    const ROW = grid.length, COL = grid[0].length
    const DFS = (row, col) => {
        const stack = [[row, col]]
        let currCol, currRow, resArea = 0
        while (stack.length !== 0) {
            [currRow, currCol] = stack.pop()
            if (grid[currRow][currCol] !== 1)
                continue
            grid[currRow][currCol] = 2
            resArea++
            if (currRow+1 < ROW) stack.push([currRow+1, currCol])
            if (currRow-1 >= 0)  stack.push([currRow-1, currCol])
            if (currCol+1 < COL) stack.push([currRow, currCol+1])
            if (currCol-1 >= 0)  stack.push([currRow, currCol-1])
        }
        return resArea
    }
    let ans = 0
    for (let i = 0; i < ROW; i++)
        for (let j = 0; j < COL; j++)
            if (grid[i][j] === 1)
                ans = Math.max(ans, DFS(i, j))
    return ans
};