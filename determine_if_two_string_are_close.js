function closeStrings(word1, word2) {
    
    if (word1.length !== word2.length) {
        return false;
    }
    const freq1 = new Map();
    const freq2 = new Map();

    for (const char of word1) {
        freq1.set(char, (freq1.get(char) || 0) + 1);
    }

    for (const char of word2) {
        freq2.set(char, (freq2.get(char) || 0) + 1);
    }

    const keys1 = Array.from(freq1.keys()).sort();
    const keys2 = Array.from(freq2.keys()).sort();

    if (keys1.join('') !== keys2.join('')) {
        return false;
    }
    
    const values1 = Array.from(freq1.values()).sort((a, b) => a - b);
    const values2 = Array.from(freq2.values()).sort((a, b) => a - b);

    return values1.join('') === values2.join('');
}


console.log(closeStrings("abc", "bca")); 