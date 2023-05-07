var toGoatLatin = function(sentence) {
    var a = '';
    const vowel = 'aeiouAEIOU';
    var words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        a += 'a';
        if (!vowel.includes(words[i].charAt(0))) {
            const tmp = words[i].charAt(0);
            words[i] = words[i].slice(1);
            words[i] += tmp;
        }
        words[i] += 'ma';
        words[i] += a;
    }
    return words.join(' ');
};

console.log(toGoatLatin('I speak Goat Latin'))