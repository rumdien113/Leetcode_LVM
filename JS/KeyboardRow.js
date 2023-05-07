var findWords = function(words) {
    var ans = []
    var row1 = 'qwertyuiop'
    var row2 = 'asdfghjkl'
    var row3 = 'zxcvbnm'
    return words.filter(word => {
        const ele = word.toLowerCase().split('');
        return (
            ele.every(letter => row1.includes(letter)) ||
            ele.every(letter => row2.includes(letter)) ||
            ele.every(letter => row3.includes(letter))
        )
    });
};

console.log(findWords(["Hello","Alaska","Dad","Peace"]))