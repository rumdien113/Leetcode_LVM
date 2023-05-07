var reverseWords = function(s) {
    var words = s.split(' ');
    var ans = words.map(word => word.split('').reverse().join(''));
    return ans.join(' ');
};

console.log(reverseWords('Let\'s take LeetCode contest'));