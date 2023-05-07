var canConstruct = function(ransomNote, magazine) {
    var ans = 0
    ransomNote = ransomNote.split('')
    for (let i of ransomNote)
        if (magazine.includes(i)) {
            magazine = magazine.replace(i, '')
            ans++
        }
    return ans === ransomNote.length ? true : false
};