var uniqueMorseRepresentations = function(words) {
    const morse = {
        'a': '.-',
        'b': '-...',
        'c': '-.-.',
        'd': '-..',
        'e': '.',
        'f': '..-.',
        'g': '--.',
        'h': '....',
        'i': '..',
        'j': '.---',
        'k': '-.-',
        'l': '.-..',
        'm': '--',
        'n': '-.',
        'o': '---',
        'p': '.--.',
        'q': '--.-',
        'r': '.-.',
        's': '...',
        't': '-',
        'u': '..-',
        'v': '...-',
        'w': '.--',
        'x': '-..-',
        'y': '-.--',
        'z': '--..'
    };
    for (let i = 0; i < words.length; i++) {
        var str = '';
        for (let j = 0; j < words[i].length; j++)
            str += morse[words[i][j]];
        words[i] = str;
    }
    return new Set(words).size;
};