var flipAndInvertImage = function(image) {
    for (let rr of image) {
        rr.reverse();
        for (let i = 0; i < rr.length; i++)
        rr[i] ^= 1;
    }
    return image;
};

console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]))