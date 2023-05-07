var matrixReshape = function(mat, r, c) {
    var tmp = mat.flat();
    const ans = [];
    if (tmp.length !== r*c)
        return mat;
    
    for (let i = 0; i < r; i++)
        ans.push(tmp.slice(i * c, (i+1) * c))
    return ans
};