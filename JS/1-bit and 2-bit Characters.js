var isOneBitCharacter = function(bits) {
    let i = 0
    while (i < bits.length-1) {
        if (bits[i] === 1) i += 2
        else i++
    }
    return i === bits.length-1
};